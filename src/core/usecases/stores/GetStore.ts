import { StoreEntity } from '../../entities/Store'
import StoreRepository from '../../repositories/StoreRepository'

export default class GetStore {
  storeRepository: StoreRepository

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository
  }

  async execute(): Promise<StoreEntity> {
    const store = await this.storeRepository.getStore()

    return store
  }
}
