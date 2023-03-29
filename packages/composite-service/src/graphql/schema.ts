/* eslint-disable */

import { CommitID, StreamID } from '@ceramicnetwork/streamid'
import type { Document } from '@composedb/document-codecs'
import type {
  GraphDefinition,
  GraphList,
  GraphModel,
  GraphObjectFields,
  GraphReference,
  GraphRelation,
  GraphScalar,
  GraphViewField,
} from '@composedb/graph-codecs'
import { CeramicCommitID, getScalar } from '@composedb/graphql-scalars'
import {
  GraphQLBoolean,
  GraphQLEnumType,
  type GraphQLEnumValueConfigMap,
  type GraphQLFieldConfig,
  type GraphQLFieldConfigMap,
  type GraphQLInputFieldConfigMap,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  type GraphQLOutputType,
  GraphQLSchema,
  assertValidSchema,
} from 'graphql'
import {
  type Connection,
  type ConnectionArguments,
  connectionArgs,
  connectionDefinitions,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay'

import type { Context } from './context.js'
// import type { UpdateDocOptions } from './loader.js'
type UpdateDocOptions = any

type EmbeddedObject = { __type: string; [key: string]: unknown }

type GraphQLNodeDefinitions = {
  nodeInterface: GraphQLInterfaceType
  nodeField: GraphQLFieldConfig<unknown, Context>
  nodesField: GraphQLFieldConfig<unknown, Context>
}
type SharedDefinitions = GraphQLNodeDefinitions & {
  accountObject: GraphQLObjectType<string, Context>
  queryFields: GraphQLFieldConfigMap<unknown, Context>
}

type BuildObjectParams = {
  name: string
  fields: GraphObjectFields
  definitions: SharedDefinitions
}
type BuildDocumentObjectParams = BuildObjectParams & { model: GraphModel }

type ConnectionAccountArgument = { account?: string }
type ConnectionArgumentsWithAccount = ConnectionArguments & ConnectionAccountArgument

const connectionArgsWithAccount = {
  ...connectionArgs,
  account: {
    type: GraphQLID,
    description: 'Returns only documents created by the provided account',
  },
}

const UpdateOptionsInput = new GraphQLInputObjectType({
  name: 'UpdateOptionsInput',
  fields: {
    replace: {
      type: GraphQLBoolean,
      defaultValue: false,
      description: 'Fully replace the document contents instead of performing a shallow merge',
    },
    version: {
      type: CeramicCommitID,
      description: 'Only perform mutation if the document matches the provided version',
    },
  },
})

/**
 * GraphQL schema creation parameters.
 */
export type CreateSchemaParams = {
  definition: GraphDefinition
  readonly?: boolean
}

class SchemaBuilder {
  // Source composite
  #def: GraphDefinition
  // Schema options
  #isReadonly: boolean
  // Internal records
  #types: Record<string, GraphQLEnumType | GraphQLObjectType> = {}
  #inputObjects: Record<string, GraphQLInputObjectType> = {}
  #mutations: Record<string, GraphQLFieldConfig<any, Context>> = {}
  // Internal mapping of model IDs to object names
  #modelAliases: Record<string, string>

  constructor(params: CreateSchemaParams) {
    this.#def = params.definition
    this.#isReadonly = !!params.readonly
    this.#modelAliases = Object.entries(this.#def.models).reduce((aliases, [alias, model]) => {
      aliases[model.id] = alias
      return aliases
    }, {} as Record<string, string>)
  }

  build(): GraphQLSchema {
    this._buildEnums()
    const definitions = this._createSharedDefinitions()
    this._buildObjects(definitions)
    this._buildConnections()
    const schema = this._createSchema(definitions)
    assertValidSchema(schema)
    return schema
  }

  _createSharedDefinitions(): SharedDefinitions {
    const nodeDefs = nodeDefinitions(
      async (id: string, ctx: Context) => {
        return id.startsWith('did:') ? id : await ctx.loader.load(id)
      },
      (didOrDoc: string | Document) => {
        return typeof didOrDoc === 'string' ? 'CeramicAccount' : this.#modelAliases[didOrDoc.model]
      }
    )

    const accountObject = new GraphQLObjectType<string, Context>({
      name: 'CeramicAccount',
      interfaces: [nodeDefs.nodeInterface],
      fields: () => {
        const config: GraphQLFieldConfigMap<string, Context> = {
          id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'Globally unique identifier of the account (DID string)',
            resolve: (did) => did,
          },
          isViewer: {
            type: new GraphQLNonNull(GraphQLBoolean),
            description:
              'Whether the Ceramic instance is currently authenticated with this account or not',
            resolve: (did, _, ctx) => ctx.viewerID === did,
          },
        }
        for (const [alias, reference] of Object.entries(this.#def.accountData ?? {})) {
          const model = this.#def.models[reference.name]
          if (model == null) {
            throw new Error(`Missing model for reference name: ${reference.name}`)
          }

          if (reference.type === 'node') {
            config[alias] = {
              type: this.#types[reference.name],
              resolve: async (account, _, ctx): Promise<Document | null> => {
                return await ctx.documents.querySingle({ account, models: [model.id] })
              },
            }
          } else if (reference.type === 'connection') {
            config[alias] = {
              type: this.#types[`${reference.name}Connection`],
              args: connectionArgs,
              resolve: async (
                account,
                args: ConnectionArguments,
                ctx
              ): Promise<Connection<Document | null>> => {
                return await ctx.documents.queryPage({ ...args, account, models: [model.id] })
              },
            }
          } else {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            throw new Error(`Unsupported reference type: ${reference.type}`)
          }
        }
        return config
      },
    })

    const queryFields: GraphQLFieldConfigMap<unknown, Context> = {
      node: nodeDefs.nodeField,
      viewer: {
        type: accountObject,
        description: 'Account currently authenticated on the Ceramic instance, if set',
        resolve: (_self, _args, ctx): string | null => ctx.viewerID ?? null,
      },
    }

    return { ...nodeDefs, accountObject, queryFields }
  }

  _buildEnums() {
    for (const [name, values] of Object.entries(this.#def.enums)) {
      this.#types[name] = new GraphQLEnumType({
        name,
        values: values.reduce((acc, value) => {
          acc[value] = { value }
          return acc
        }, {} as GraphQLEnumValueConfigMap),
      })
    }
  }

  _buildObjects(definitions: SharedDefinitions) {
    for (const [name, fields] of Object.entries(this.#def.objects)) {
      this._buildObjectType({ definitions, name, fields })
    }
  }

  _buildObjectType(params: BuildObjectParams) {
    const model = this.#def.models[params.name]
    return model
      ? this._buildDocumentObjectType({ model, ...params })
      : this._buildEmbeddedObjectType(params)
  }

  _buildDocumentObjectType({ model, definitions, name, fields }: BuildDocumentObjectParams) {
    this.#types[name] = new GraphQLObjectType<Document>({
      name,
      interfaces: [definitions.nodeInterface],
      isTypeOf: (value: Document) => value.model === model.id,
      fields: () => {
        const config: GraphQLFieldConfigMap<Document, Context> = {
          id: {
            // Use GraphQLID here for Relay compliance
            type: new GraphQLNonNull(GraphQLID),
            resolve: (doc) => doc.id.toString(),
          },
        }
        for (const [key, field] of Object.entries(fields)) {
          switch (field.type) {
            case 'meta':
              // Don't show meta fields in schema
              continue
            case 'reference':
              config[key] = this._buildDocumentObjectReferenceField(key, field)
              break
            case 'list':
              config[key] = {
                type: this._buildObjectListFieldType(definitions, field),
                resolve: (doc) => doc.content?.[key],
              }
              break
            case 'view':
              config[key] = this._buildDocumentObjectViewField(key, definitions, field, fields)
              break
            default:
              config[key] = {
                type: this._buildScalarFieldType(definitions, field),
                resolve: (doc) => doc.content?.[key],
              }
          }
        }
        return config
      },
    })

    if (!this.#isReadonly) {
      this._buildInputObjectType(name, fields)
      this._buildNodeMutations(definitions.queryFields, name, model)
    }
  }

  _buildEmbeddedObjectType({ definitions, name, fields }: BuildObjectParams) {
    this.#types[name] = new GraphQLObjectType<EmbeddedObject>({
      name,
      fields: () => {
        const config: GraphQLFieldConfigMap<EmbeddedObject, Context> = {}
        for (const [key, field] of Object.entries(fields)) {
          switch (field.type) {
            case 'meta':
              // Don't show meta fields in schema
              continue
            case 'reference':
              config[key] = this._buildEmbeddedObjectReferenceField(key, field)
              break
            case 'list':
              config[key] = {
                type: this._buildObjectListFieldType(definitions, field),
                resolve: (obj) => obj[key],
              }
              break
            case 'view':
              throw new Error(`Unsupported view field ${key} on embedded object ${name}`)
            default:
              config[key] = {
                type: this._buildScalarFieldType(definitions, field),
                resolve: (obj) => obj[key],
              }
          }
        }
        return config
      },
    })

    if (!this.#isReadonly) {
      this._buildInputObjectType(name, fields)
    }
  }

  _buildConnections() {
    for (const objectName of Object.keys(this.#def.models)) {
      const nodeType = this.#types[objectName]
      if (nodeType == null) {
        throw new Error(`Missing object type for connection: ${objectName}`)
      }
      const { connectionType, edgeType } = connectionDefinitions({ nodeType })
      this.#types[`${objectName}Connection`] = connectionType
      this.#types[`${objectName}Edge`] = edgeType
    }
  }

  _buildDocumentObjectReferenceField(
    key: string,
    field: GraphReference
  ): GraphQLFieldConfig<Document, Context> {
    const name = field.refType === 'connection' ? field.refName + 'Connection' : field.refName
    const ref = this.#types[name]
    if (ref == null) {
      throw new Error(`Missing type: ${name}`)
    }
    const type = field.required ? new GraphQLNonNull(ref) : ref

    switch (field.refType) {
      case 'connection':
        return {
          type,
          args: connectionArgs,
          resolve: (_doc, _args: ConnectionArguments, _ctx): Promise<Connection<any> | null> => {
            throw new Error('Not implemented')
          },
        }
      case 'node':
        return {
          type,
          args: connectionArgs,
          resolve: async (doc, _, ctx): Promise<Document | null> => {
            return await ctx.loader.load(doc.content[key] as string)
          },
        }
      case 'enum':
      case 'object':
        return { type, resolve: (doc) => doc.content[key] }
      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unsupported reference type on document object: ${field.refType}`)
    }
  }

  _buildEmbeddedObjectReferenceField(
    key: string,
    field: GraphReference
  ): GraphQLFieldConfig<EmbeddedObject, Context> {
    const ref = this.#types[field.refName]
    if (ref == null) {
      throw new Error(`Missing type: ${field.refName}`)
    }
    const type = field.required ? new GraphQLNonNull(ref) : ref

    switch (field.refType) {
      case 'enum':
      case 'object':
        return { type, resolve: (obj) => obj[key] }
      default:
        throw new Error(`Unsupported reference type on embedded object: ${field.refType}`)
    }
  }

  _buildObjectListFieldType(
    definitions: SharedDefinitions,
    field: GraphList
  ): GraphQLList<GraphQLOutputType> | GraphQLNonNull<GraphQLList<GraphQLOutputType>> {
    let itemType
    if (field.item.type === 'reference') {
      itemType = this.#types[field.item.refName]
      if (itemType == null) {
        throw new Error(`Missing referenced object type: ${field.item.refName}`)
      }
    } else if (field.item.type === 'did') {
      itemType = definitions.accountObject
    } else {
      itemType = getScalar(field.item.type)
    }

    if (field.item.required) {
      itemType = new GraphQLNonNull(itemType)
    }

    const type = new GraphQLList(itemType)
    return field.required ? new GraphQLNonNull(type) : type
  }

  _buildDocumentObjectRelation(
    key: string,
    relation: GraphRelation,
    objectFields: GraphObjectFields
  ): GraphQLFieldConfig<Document, Context> {
    const modelAlias = this.#modelAliases[relation.model]
    if (modelAlias == null) {
      throw new Error(
        `Model alias not found for relation with ID ${relation.model} on field ${key}`
      )
    }

    switch (relation.source) {
      case 'document': {
        const ref = objectFields[relation.property]
        if (ref == null) {
          throw new Error(
            `Missing reference field ${relation.property} for relation defined on field ${key}`
          )
        }
        return {
          type: this.#types[modelAlias],
          resolve: async (doc, _args, ctx): Promise<Document | null> => {
            const id = doc.content?.[relation.property] as string | void
            if (id == null) {
              return null
            }
            const loaded = await ctx.loader.load(id)
            if (loaded == null) {
              return null
            }
            if (relation.model != null && loaded.model !== relation.model) {
              console.warn(
                `Ignoring unexpected model ${loaded.model} for document ${id}, expected model ${relation.model}`
              )
              return null
            }
            return loaded
          },
        }
      }
      case 'queryConnection':
        return {
          type: new GraphQLNonNull(this.#types[`${modelAlias}Connection`]),
          args: connectionArgsWithAccount,
          resolve: async (
            doc,
            args: ConnectionArgumentsWithAccount,
            ctx
          ): Promise<Connection<unknown> | null> => {
            const account = args.account === 'documentAccount' ? doc.controller : args.account
            return await ctx.documents.queryPage({
              ...args,
              account,
              models: [relation.model],
              filter: { [relation.property]: { is: doc.id } },
            })
          },
        }
      case 'queryCount':
        return {
          type: new GraphQLNonNull(GraphQLInt),
          args: {
            account: {
              type: GraphQLID,
              description: 'Counts only documents created by the provided account',
            },
          },
          resolve: async (doc, args: ConnectionAccountArgument, ctx): Promise<number> => {
            const account = args.account === 'documentAccount' ? doc.controller : args.account
            return await ctx.documents.count({
              account,
              models: [relation.model],
              filter: { [relation.property]: { is: doc.id } },
            })
          },
        }
      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unsupported relation source: ${relation.source}`)
    }
  }

  _buildDocumentObjectViewField(
    key: string,
    definitions: SharedDefinitions,
    field: GraphViewField,
    objectFields: GraphObjectFields
  ): GraphQLFieldConfig<Document, Context> {
    switch (field.viewType) {
      case 'documentAccount':
        return {
          type: new GraphQLNonNull(definitions.accountObject),
          description: 'Account controlling the document',
          resolve: (doc): string => doc.controller,
        }
      case 'documentVersion':
        return {
          type: new GraphQLNonNull(CeramicCommitID),
          description: 'Current version of the document',
          resolve: (doc): string => {
            return CommitID.make(StreamID.fromString(doc.id), doc.tip).toString()
          },
        }
      case 'relation':
        return this._buildDocumentObjectRelation(key, field.relation, objectFields)
      default:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unsupported view type: ${field.viewType}`)
    }
  }

  _buildScalarFieldType(definitions: SharedDefinitions, field: GraphScalar): GraphQLOutputType {
    const type = field.type === 'did' ? definitions.accountObject : getScalar(field.type)
    return field.required ? new GraphQLNonNull(type) : type
  }

  _buildInputObjectType(name: string, fields: GraphObjectFields) {
    const isDocument = this.#def.models[name] != null

    const buildFields = (required: boolean): GraphQLInputFieldConfigMap => {
      const config: GraphQLInputFieldConfigMap = {}
      const inputPrefix = isDocument || required ? '' : 'Partial'

      for (const [key, field] of Object.entries(fields)) {
        let type
        switch (field.type) {
          case 'meta':
          case 'view':
            // Meta and views can't be set in inputs
            continue
          case 'reference':
            switch (field.refType) {
              case 'connection':
                // Ignore connections from inputs, should be derived
                continue
              case 'enum':
                type = this.#types[field.refName] as GraphQLEnumType
                break
              case 'node':
                type = GraphQLID
                break
              case 'object': {
                type = this.#inputObjects[inputPrefix + field.refName]
                if (type == null) {
                  throw new Error(`Missing referenced input type: ${inputPrefix + field.refName}`)
                }
                break
              }
            }
            break
          case 'list': {
            let itemType
            if (field.item.type === 'reference') {
              itemType = this.#inputObjects[inputPrefix + field.item.refName]
              if (itemType == null) {
                throw new Error(
                  `Missing referenced input type: ${inputPrefix + field.item.refName}`
                )
              }
            } else {
              itemType = getScalar(field.item.type)
            }
            type = new GraphQLList(itemType)
            break
          }
          default:
            type = getScalar(field.type)
        }
        if (type != null) {
          config[key] = { type: required && field.required ? new GraphQLNonNull(type) : type }
        }
      }

      return config
    }

    this.#inputObjects[name] = new GraphQLInputObjectType({
      name: `${name}Input`,
      fields: () => buildFields(true),
    })
    if (isDocument) {
      this.#inputObjects[`Partial${name}`] = new GraphQLInputObjectType({
        name: `Partial${name}Input`,
        fields: () => buildFields(false),
      })
    }
  }

  _buildNodeMutations(
    queryFields: GraphQLFieldConfigMap<unknown, Context>,
    name: string,
    _model: GraphModel
  ) {
    this.#mutations[`create${name}`] = mutationWithClientMutationId({
      name: `Create${name}`,
      inputFields: () => ({
        content: { type: new GraphQLNonNull(this.#inputObjects[name]) },
      }),
      outputFields: () => ({
        ...queryFields,
        document: { type: new GraphQLNonNull(this.#types[name]) },
      }),
      mutateAndGetPayload: async (_input: { content: Record<string, unknown> }, _ctx: Context) => {
        // if (ctx.ceramic.did == null || !ctx.ceramic.did.authenticated) {
        //   throw new Error('Ceramic instance is not authenticated')
        // }
        // const document =
        //   model.accountRelation.type === 'single'
        //     ? await ctx.createSingle(model.id, input.content)
        //     : await ctx.createDoc(model.id, input.content)
        // return { document }
        throw new Error('Not implemented')
      },
    })

    this.#mutations[`update${name}`] = mutationWithClientMutationId({
      name: `Update${name}`,
      inputFields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        content: { type: new GraphQLNonNull(this.#inputObjects[`Partial${name}`]) },
        options: { type: UpdateOptionsInput },
      }),
      outputFields: () => ({
        ...queryFields,
        document: { type: new GraphQLNonNull(this.#types[name]) },
      }),
      mutateAndGetPayload: async (
        _input: { id: string; content: Record<string, unknown>; options?: UpdateDocOptions },
        _ctx: Context
      ) => {
        throw new Error('Not implemented')
      },
    })
  }

  _createSchema(definitions: SharedDefinitions) {
    const queryFields = { ...definitions.queryFields }

    for (const [alias, model] of Object.entries(this.#def.models)) {
      const first = alias[0].toLowerCase()
      const rest = alias.slice(1)
      queryFields[`${first}${rest}Index`] = {
        type: this.#types[`${alias}Connection`],
        args: connectionArgs,
        resolve: async (_, args: ConnectionArguments, ctx): Promise<Connection<any> | null> => {
          return await ctx.documents.queryPage({ ...args, models: [model.id] })
        },
      }
    }

    const schemaFields: Record<string, GraphQLObjectType> = {
      query: new GraphQLObjectType({ name: 'Query', fields: queryFields }),
    }
    if (!this.#isReadonly && Object.keys(this.#mutations).length !== 0) {
      schemaFields.mutation = new GraphQLObjectType({ name: 'Mutation', fields: this.#mutations })
    }

    return new GraphQLSchema(schemaFields)
  }
}

/**
 * Create a GraphQL schema from a runtime composite definition
 */
export function createGraphQLSchema(params: CreateSchemaParams): GraphQLSchema {
  return new SchemaBuilder(params).build()
}
