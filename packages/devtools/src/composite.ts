import type {
  CeramicApi,
  CeramicCommit,
  ModelData,
  SignedCommitContainer,
  Context,
} from '@ceramicnetwork/common'
import { Model, type ModelViewsDefinition } from '@ceramicnetwork/stream-model'
import { Cacao } from '@didtools/cacao'
import type {
  CompositeViewsDefinition,
  EncodedCompositeDefinition,
  InternalCompositeDefinition,
  ModelDefinition,
  RuntimeCompositeDefinition,
  StreamCommits,
  FieldsIndex,
} from '@composedb/types'
import { cloneDeep, merge } from 'lodash-es'
import createObjectHash from 'object-hash'

import { decodeSignedMap, encodeSignedMap } from './formats/json.js'
import { createRuntimeDefinition } from './formats/runtime.js'
import { createAbstractCompositeDefinition } from './schema/compiler.js'
import type { AbstractModelDefinition } from './schema/types.js'
import { StreamID } from '@ceramicnetwork/streamid'

// The hardcoded "model" StreamID that all Model streams have in their metadata. This provides
// a "model" StreamID that can be indexed to query the set of all published Models.
// The StreamID uses the "UNLOADABLE" StreamType, and has string representation: "kh4q0ozorrgaq2mezktnrmdwleo1d"

const MODEL_STREAM_ID = Model.MODEL.toString()

const MODEL_GENESIS_OPTS = {
  anchor: true,
  publish: true,
}

function assertAuthenticatedDID(ceramic: CeramicApi): void {
  if (!ceramic.did?.authenticated) {
    throw new Error(`An authenticated DID must be attached to the Ceramic instance`)
  }
}

type StrictCompositeDefinition = Required<InternalCompositeDefinition>

function isSignedCommitContainer(input: Record<string, any>): input is SignedCommitContainer {
  return Object.keys(input).includes('jws') && Object.keys(input).includes('linkedBlock')
}

function toStrictDefinition(definition: InternalCompositeDefinition): StrictCompositeDefinition {
  const emptyViews = { account: {}, root: {}, models: {} }
  const views = definition.views ? { ...emptyViews, ...definition.views } : emptyViews
  const indices = definition.indices ? definition.indices : {}
  return { aliases: {}, commonEmbeds: [], ...definition, views, indices }
}

function isSupportedVersion(supported: string, check: string): boolean {
  const [supportedMajor] = supported.split('.')
  const [checkMajor] = check.split('.')
  return supportedMajor === checkMajor
}

function assertSupportedVersion(supported: string, check: string): void {
  if (!isSupportedVersion(supported, check)) {
    throw new Error(`Unsupported Composite version ${check}, expected version ${supported}`)
  }
}

function assertModelsHaveCommits(
  models: Record<string, ModelDefinition>,
  commits: Record<string, StreamCommits>,
): void {
  for (const id of Object.keys(models)) {
    if (commits[id] == null) {
      throw new Error(`Missing commits for model ${id}`)
    }
  }
}

function assertSupportedWriteModelController(model: Model, ceramic: CeramicApi): void {
  const unsupported = `Unsupported model controller ${model.metadata.controller}`
  if (model.metadata.controller.startsWith('did:pkh:')) {
    if (ceramic.context == null) {
      throw new Error(`${unsupported}, missing ceramic context`)
    }
    const context = ceramic.context as Context
    if (context.did == null) {
      throw new Error(`${unsupported}, did missing from ceramic context`)
    }
    if (!context.did.hasCapability) {
      throw new Error(`${unsupported}, only did:pkh with CACAO is supported`)
    }
    const cacao: Cacao = context.did.capability
    if (cacao.p.exp != null) {
      throw new Error(`${unsupported}, only did:pkh CACAO without expiry is supported`)
    }
    const hasModelResource = cacao.p.resources?.includes(`ceramic://*?model=${MODEL_STREAM_ID}`)
    if (!hasModelResource) {
      throw new Error(`${unsupported}, only cacao with resource ${MODEL_STREAM_ID} is supported`)
    }
  } else if (!model.metadata.controller.startsWith('did:key:')) {
    throw new Error(`${unsupported}, only did:key and did:pkh are supported`)
  }
}

async function assertSupportedReadModelController(
  model: Model,
  signedCommitContainer: SignedCommitContainer,
): Promise<void> {
  const unsupported = `Unsupported model controller ${model.metadata.controller}`
  if (
    model.metadata.controller.startsWith('did:pkh:') &&
    signedCommitContainer.cacaoBlock != null
  ) {
    const cacao = await Cacao.fromBlockBytes(signedCommitContainer.cacaoBlock)
    if (cacao == null) {
      throw new Error(`${unsupported}, only did:pkh with CACAO is supported`)
    }
    assertValidCacao(cacao, model.metadata.controller)
  } else if (!model.metadata.controller.startsWith('did:key:')) {
    throw new Error(`${unsupported}, only did:key is supported`)
  }
}

function assertValidCacao(cacao: Cacao, controller: string): void {
  if (cacao.p.iss != controller) {
    throw new Error(`Cacao issuer ${cacao.p.iss} does not match controller ${controller}`)
  }
  if (cacao.p.exp != null) {
    throw new Error(`only did:pkh CACAO without expiry is supported`)
  }
  const hasModelResource = cacao.p.resources?.includes(`ceramic://*?model=${MODEL_STREAM_ID}`)
  if (!hasModelResource) {
    throw new Error(`only cacao with resource "ceramic://*?model=${MODEL_STREAM_ID}" is supported`)
  }
}

/** @internal */
export function setDefinitionAliases(
  definition: StrictCompositeDefinition,
  aliases: Record<string, string>,
  replace = false,
): StrictCompositeDefinition {
  const existing = replace ? {} : definition.aliases
  definition.aliases = { ...existing, ...aliases }
  return definition
}

/** @internal */
export function setDefinitionCommonEmbeds(
  definition: StrictCompositeDefinition,
  names: Iterable<string>,
  replace = false,
): StrictCompositeDefinition {
  const existing = replace ? [] : definition.commonEmbeds
  definition.commonEmbeds = Array.from(new Set([...existing, ...names]))
  return definition
}

/** @internal */
export function setDefinitionViews(
  definition: StrictCompositeDefinition,
  views: CompositeViewsDefinition,
  replace = false,
): StrictCompositeDefinition {
  const existing = replace ? {} : definition.views
  definition.views = merge(existing, views)
  return definition
}

async function loadModelsFromCommits<Models = Record<string, StreamCommits>>(
  ceramic: CeramicApi,
  modelsCommits: Models & {}, // eslint-disable-line @typescript-eslint/ban-types
): Promise<Record<keyof Models, ModelDefinition>> {
  const definitions = await Promise.all(
    Object.values(modelsCommits).map(async (commits): Promise<Model> => {
      const modelCommitsValues = commits as Array<StreamCommits>
      const [genesis, ...updates] = modelCommitsValues
      const model = await ceramic.createStreamFromGenesis<Model>(
        Model.STREAM_TYPE_ID,
        genesis,
        MODEL_GENESIS_OPTS,
      )

      modelCommitsValues.filter(isSignedCommitContainer).map(async (commit: StreamCommits) => {
        await assertSupportedReadModelController(model, commit as unknown as SignedCommitContainer)
      })
      for (const commit of updates) {
        await ceramic.applyCommit(model.id, commit as unknown as CeramicCommit)
      }
      return model
    }),
  )
  return Object.keys(modelsCommits).reduce(
    (acc, id, index) => {
      const model = definitions[index]
      if (model == null) {
        throw new Error(`Missing Model for ID ${id}`)
      }
      const modelID = model.id.toString()
      if (modelID !== id) {
        throw new Error(`Unexpected Model stream ID: expected ${id}, got ${modelID}`)
      }
      acc[modelID as keyof Models] = model.content
      return acc
    },
    {} as Record<keyof Models, ModelDefinition>,
  )
}

/**
 * Composite instance creation parameters.
 */
export type CompositeParams = {
  /**
   * Model streams commits, that can be pushed to any Ceramic node to ensure the Model streams
   * used by a composite are available.
   */
  commits: Record<string, StreamCommits>
  /**
   * Internal metadata describing the composite.
   */
  definition: InternalCompositeDefinition
}

/**
 * Supported composite input when comparing or merging composites.
 */
export type CompositeInput = Composite | CompositeParams

/**
 * Supported options for merging composites.
 */
export type CompositeOptions = {
  /**
   * Additional Models aliases merged in the composite in addition to the ones present in the
   * source composites.
   */
  aliases?: Record<string, string>
  /**
   * Behavior to apply for merging common embeds:
   * - `none` (default) will not set an common embed
   * - `all` will merge all the common embeds found in any composite
   * - explicit embed names to set as common embeds
   */
  commonEmbeds?: 'all' | 'none' | Iterable<string>
  /**
   * Additional views merged in the composite in addition to the ones present in the source
   * composites.
   */
  views?: CompositeViewsDefinition
}

/**
 * Composite creation parameters from a schema.
 */
export type CreateParams = {
  /**
   * Ceramic instance connected to the node the new Model streams must be created on. The Ceramic
   * instance **must have an authenticated DID attached to it** in order to create Models, using
   * the `did:key` method.
   */
  ceramic: CeramicApi
  /**
   * Composite schema string.
   */
  schema: string
  /**
   * Whether to add the Models to the index or not. If `true` (default), the Ceramic instance
   * must be authenticated with an admin DID.
   */
  index?: boolean
}

/**
 * Composite creation parameters from a JSON-encoded definition.
 */
export type FromJSONParams = {
  /**
   * Ceramic instance connected to the node where the Model stream will be pushed.
   */
  ceramic: CeramicApi
  /**
   * JSON-encoded composite definition.
   */
  definition: EncodedCompositeDefinition
  /**
   * Whether to add the Models to the index or not. If `true`, the Ceramic instance must be
   * authenticated with an admin DID. Defaults to `false`.
   */
  index?: boolean
}

/**
 * Composite creation parameters from existing models.
 */
export type FromModelsParams = CompositeOptions & {
  /**
   * Ceramic instance connected to the node where the Model stream are already present.
   */
  ceramic: CeramicApi
  /**
   * Stream IDs of the Models to import in the composite.
   */
  models: Array<string>
  /**
   * Whether to add the Models to the index or not. If `true`, the Ceramic instance must be
   * authenticated with an admin DID. Defaults to `false`.
   */
  index?: boolean
}

/**
 * The Composite class provides APIs for managing composites (sets of Model streams) through their
 * development lifecycle, including the creation of new Models, import and export of existing
 * composites encoded as JSON, and compilation to the runtime format used by the
 * {@linkcode client.ComposeClient ComposeClient class}.
 *
 * Composite instances are **immutable**, so methods affecting the contents of the internal
 * composite definition will **return new instances** of the Composite class.
 *
 * Composite class is exported by the {@linkcode devtools} module.
 *
 * ```sh
 * import { Composite } from '@composedb/devtools'
 * ```
 */
export class Composite {
  /**
   * Current version of the composites format.
   */
  static VERSION = '1.0'

  /**
   * Create new model streams based on the provided `schema` and group them in a composite
   * wrapped in a Composite instance.
   */
  static async create(params: CreateParams): Promise<Composite> {
    const { commonEmbeds, models } = createAbstractCompositeDefinition(params.schema)
    const definition: InternalCompositeDefinition = {
      version: Composite.VERSION,
      models: {},
      commonEmbeds,
    }
    const modelsViews: Record<string, ModelViewsDefinition> = {}
    const modelsIndices: Record<string, Array<FieldsIndex>> = {}
    const commits: Record<string, any> = {}

    // TODO: once interfaces are supported, they need to be loaded or created first
    await Promise.all(
      // For each model definition...
      Object.values(models).map(async (abstractModel: AbstractModelDefinition) => {
        // Create or load the model stream
        let model
        if (abstractModel.action === 'create') {
          assertAuthenticatedDID(params.ceramic)
          model = await Model.create(params.ceramic, abstractModel.model)
          if (abstractModel.indices) {
            modelsIndices[abstractModel.model.name] = abstractModel.indices
          }
        } else {
          model = await Model.load(params.ceramic, abstractModel.id)
          modelsViews[abstractModel.id] = abstractModel.views
          if (abstractModel.indices) {
            modelsIndices[abstractModel.id] = abstractModel.indices
          }
        }
        assertSupportedWriteModelController(model, params.ceramic)
        const id = model.id.toString()
        definition.models[id] = model.content

        // load stream commits for the model stream
        const streamCommits = await params.ceramic.loadStreamCommits(id)
        commits[id] = streamCommits
          .map((c) => c.value as Record<string, any>)
          .filter(isSignedCommitContainer)
      }),
    )

    definition.views = { models: modelsViews }
    definition.indices = modelsIndices
    const composite = new Composite({ commits, definition })

    // By default, add models to the index
    if (params.index !== false) {
      await composite.startIndexingOn(params.ceramic)
    }

    return composite
  }

  /**
   * Create a Composite instance by merging existing composites.
   */
  static from(composites: Iterable<CompositeInput>, options?: CompositeOptions): Composite {
    const [first, ...rest] = composites
    if (first == null) {
      throw new Error('Missing composites to compose')
    }
    const composite = first instanceof Composite ? first : new Composite(first)
    return composite.merge(rest, options)
  }

  /**
   * Create a Composite instance from a JSON-encoded `CompositeDefinition`.
   */
  static async fromJSON(params: FromJSONParams): Promise<Composite> {
    const { models, ...definition } = params.definition
    const commits = decodeSignedMap(models)
    const composite = new Composite({
      commits,
      definition: {
        ...definition,
        models: await loadModelsFromCommits(params.ceramic, commits),
      },
    })

    // Only add models to the index if explicitly requested
    if (params.index) {
      await composite.startIndexingOn(params.ceramic)
    }

    return composite
  }

  /**
   * Create a Composite instance from a set of Model streams already present on a Ceramic node.
   */
  static async fromModels(params: FromModelsParams): Promise<Composite> {
    const definition: InternalCompositeDefinition = {
      version: Composite.VERSION,
      models: {},
    }
    const commits: Record<string, any> = {}

    await Promise.all(
      params.models.map(async (id) => {
        const [model, streamCommits] = await Promise.all([
          Model.load(params.ceramic, id),
          params.ceramic.loadStreamCommits(id),
        ])
        definition.models[id] = model.content
        commits[id] = streamCommits
          .map((c) => c.value as Record<string, any>)
          .filter(isSignedCommitContainer)
        for (const commit of commits[id]) {
          await assertSupportedReadModelController(
            model,
            commit as unknown as SignedCommitContainer,
          )
        }
      }),
    )
    const composite = new Composite({ commits, definition })

    // Only add models to the index if explicitly requested
    if (params.index) {
      await composite.startIndexingOn(params.ceramic)
    }

    return composite
  }

  #commits: Record<string, StreamCommits>
  #definition: StrictCompositeDefinition
  #hash: string | undefined

  constructor(params: CompositeParams) {
    assertSupportedVersion(Composite.VERSION, params.definition.version)
    assertModelsHaveCommits(params.definition.models, params.commits)
    this.#commits = cloneDeep(params.commits)
    this.#definition = toStrictDefinition(cloneDeep(params.definition))
  }

  /**
   * Stable hash of the internal definition, mostly used for comparisons.
   */
  get hash(): string {
    if (this.#hash == null) {
      this.#hash = createObjectHash(this.#definition)
    }
    return this.#hash
  }

  /**
   * StreamID of the Models used in the Composite.
   */
  get modelIDs(): Array<string> {
    return Object.keys(this.#definition.models)
  }

  /**
   * Copy a given set of Models identified by their stream ID, name or alias into a new Composite.
   */
  copy(models: Array<string>): Composite {
    if (models.length === 0) {
      throw new Error('Missing models to copy')
    }

    const { commits, definition } = this.toParams()
    const def = toStrictDefinition(definition)

    const nameIDs = Object.entries(def.models).reduce(
      (acc, [id, model]) => {
        acc[model.name] = id
        return acc
      },
      {} as Record<string, string>,
    )
    const aliasIDs = Object.entries(def.aliases).reduce(
      (acc, [id, alias]) => {
        acc[alias] = id
        return acc
      },
      {} as Record<string, string>,
    )

    const nextCommits: Record<string, StreamCommits> = {}
    const nextModels: Record<string, ModelDefinition> = {}
    const nextAliases: Record<string, string> = {}
    const nextViews: CompositeViewsDefinition = { account: {}, root: {}, models: {} }

    for (const model of models) {
      const id = aliasIDs[model] ?? nameIDs[model] ?? model
      if (def.models[id] == null) {
        throw new Error(`Model not found: ${model}`)
      }

      nextCommits[id] = commits[id]
      nextModels[id] = def.models[id]
      if (def.aliases[id] != null) {
        nextAliases[id] = def.aliases[id]
      }
      // TODO: check relations to other models, ensure there's no missing model in the subset
      // if (def.views.models[id] != null) {
      //   nextViews.models[id] = def.views.models[id]
      // }
      // TODO: account and root views
    }

    return new Composite({
      commits: nextCommits,
      definition: {
        version: def.version,
        commonEmbeds: def.commonEmbeds,
        models: nextModels,
        aliases: nextAliases,
        views: nextViews,
      },
    })
  }

  /**
   * Check if the composite is equal to the other one provided as input.
   */
  equals(other: CompositeInput): boolean {
    const otherHash =
      other instanceof Composite
        ? other.hash
        : createObjectHash(toStrictDefinition(other.definition))
    return this.hash === otherHash
  }

  /**
   * Merge the composite with the other one(s) into a new Composite.
   */
  merge(other: CompositeInput | Array<CompositeInput>, options: CompositeOptions = {}): Composite {
    const nextParams = this.toParams()
    const nextDefinition = toStrictDefinition(nextParams.definition)
    const collectedEmbeds = new Set<string>()

    for (const composite of Array.isArray(other) ? other : [other]) {
      const { commits, definition } =
        composite instanceof Composite ? composite.toParams() : composite
      assertSupportedVersion(nextDefinition.version, definition.version)
      assertModelsHaveCommits(definition.models, commits)

      const def = toStrictDefinition(definition)
      Object.assign(nextParams.commits, commits)
      Object.assign(nextDefinition.models, definition.models)
      Object.assign(nextDefinition.aliases, def.aliases)
      Object.assign(nextDefinition.indices, def.indices)
      merge(nextDefinition.views, def.views)
      for (const name of def.commonEmbeds) {
        collectedEmbeds.add(name)
      }
    }

    if (options.aliases != null) {
      setDefinitionAliases(nextDefinition, options.aliases)
    }
    const commonEmbeds = options.commonEmbeds ?? 'none'
    if (commonEmbeds === 'all') {
      setDefinitionCommonEmbeds(nextDefinition, collectedEmbeds)
    } else if (Array.isArray(commonEmbeds)) {
      setDefinitionCommonEmbeds(nextDefinition, commonEmbeds, true)
    }
    if (options.views != null) {
      setDefinitionViews(nextDefinition, options.views)
    }

    return new Composite({ ...nextParams, definition: nextDefinition })
  }

  /**
   * Set aliases for the Models in the composite, merging with existing ones unless `replace` is
   * `true`, and return a new Composite.
   */
  setAliases(aliases: Record<string, string>, replace = false): Composite {
    const params = this.toParams()
    const definition = setDefinitionAliases(toStrictDefinition(params.definition), aliases, replace)
    return new Composite({ ...params, definition })
  }

  /**
   * Set common embeds for the Models in the composite, merging with existing ones unless `replace`
   * is `true`, and return a new Composite.
   */
  setCommonEmbeds(names: Iterable<string>, replace = false): Composite {
    const params = this.toParams()
    const definition = setDefinitionCommonEmbeds(
      toStrictDefinition(params.definition),
      names,
      replace,
    )
    return new Composite({ ...params, definition })
  }

  /**
   * Set views for the Models in the composite, merging with existing ones unless `replace` is
   * `true`, and return a new Composite.
   */
  setViews(views: CompositeViewsDefinition, replace = false): Composite {
    const params = this.toParams()
    const definition = setDefinitionViews(toStrictDefinition(params.definition), views, replace)
    return new Composite({ ...params, definition })
  }

  /**
   * Configure the Ceramic node to index the models defined in the composite. An authenticated DID
   * set as admin in the Ceramic node configuration must be attached to the Ceramic instance.
   */
  async startIndexingOn(ceramic: CeramicApi): Promise<void> {
    assertAuthenticatedDID(ceramic)
    const definedIndices: Array<ModelData> = Array.from(Object.keys(this.#definition.models)).map(
      (id) => {
        const streamID = StreamID.fromString(id)
        const indices = this.#definition.indices?.[id] ?? []
        return {
          streamID,
          indices,
        }
      },
    )
    await ceramic.admin.startIndexingModelData(definedIndices)
  }

  /**
   * Return a JSON-encoded `CompositeDefinition` structure that can be shared and reused.
   */
  toJSON(): EncodedCompositeDefinition {
    return {
      version: this.#definition.version,
      models: encodeSignedMap(this.#commits),
      indices: this.#definition.indices,
      aliases: this.#definition.aliases,
      views: this.#definition.views,
    }
  }

  /**
   * Return a deep clone of the internal {@linkcode CompositeParams} for safe external access.
   */
  toParams(): CompositeParams {
    return {
      commits: cloneDeep(this.#commits),
      definition: cloneDeep(this.#definition),
    }
  }

  /**
   * Return a `RuntimeCompositeDefinition` to be used at runtime by the
   * {@linkcode client.ComposeClient ComposeClient}.
   */
  toRuntime(): RuntimeCompositeDefinition {
    return createRuntimeDefinition(this.#definition)
  }
}
