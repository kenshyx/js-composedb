import { StreamID } from '@ceramicnetwork/streamid'
import {
  // CommitType,
  type GenesisCommitData,
  GenesisCommitDataCodec,
  // type SignedCommitContainer,
  createDecoder,
} from '@composedb/ceramic-codecs'
import { ModelCodec, type Model } from '@composedb/model-codecs'

import { verifyCommitSignature } from './stream.js'
import type { ServiceClients } from './types.js'

const decodeGenesisCommitData = createDecoder(GenesisCommitDataCodec)

export async function modelFromGenesis(commitData: GenesisCommitData): Promise<Model> {
  if (!GenesisCommitDataCodec.is(commitData)) {
    throw Error('Invalid model genesis commit data')
  }

  const { controllers, model: modelBytes } = commitData.commit.header
  if (controllers == null || controllers.length !== 1) {
    throw new Error('Exactly one controller must be specified')
  }
  if (modelBytes == null) {
    throw new Error('Model must be specified')
  }

  const controller = controllers[0]
  const model = StreamID.fromBytes(modelBytes).toString()
  const streamID = await StreamID.fromGenesis('model', commitData.commit)
  const id = streamID.toString()
  await verifyCommitSignature({ commitData, controller, model, streamID: id })

  const stream = { content: commitData.commit.data, id, metadata: { controller, model } }
  if (!ModelCodec.is(stream)) {
    throw new Error('Invalid model stream')
  }
  return stream
}

export type ModelsManagerParams = {
  clients: ServiceClients
}

export class ModelsManager {
  #clients: ServiceClients

  constructor(params: ModelsManagerParams) {
    this.#clients = params.clients
  }

  // async createFromGenesis(commit: SignedCommitContainer): Promise<Model> {
  //   const genesis = await this.#ceramic.storeCommit.mutate({ commit })

  //   // TODO: load model content and metadata from commit, is it part of the JWS?
  //   const model: Model = { id: new StreamID(CommitType.GENESIS, genesis.cid) }

  //   await this.#db.createModel.mutate({ model, indexDocuments: false })
  //   return model
  // }

  async loadFromNetwork(id: string): Promise<Model> {
    const stream = await this.#clients.ceramic.loadStream.query({ id })
    const commitData = decodeGenesisCommitData(stream.log[0])
    return await modelFromGenesis(commitData)
  }

  async load(id: string): Promise<Model> {
    const existing = await this.#clients.database.getModel.query({ id })
    if (existing.model != null && ModelCodec.is(existing.model)) {
      return existing.model
    }

    const model = await this.loadFromNetwork(id)
    await this.#clients.database.createModel.mutate({ model, indexDocuments: false })

    return model
  }
}
