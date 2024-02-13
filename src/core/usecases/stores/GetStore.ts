import { ResponseStoreDto } from '../../dtos/store/ResponseStore'
import StoreRepository from '../../repositories/StoreRepository'

export default class GetStore {
  storeRepository: StoreRepository

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository
  }

  async execute(): Promise<ResponseStoreDto> {
    const store = await this.storeRepository.getStore()

    return store
  }
}
