import StoreAdapter from '../../../adapter/StoreAdapter'
import { CreateStoreDto } from '../../dtos/store/CreateStore'
import { StoreEntity } from '../../entities/Store'
import StoreRepository from '../../repositories/StoreRepository'

export default class CreateStore {
  storeRepository: StoreRepository

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository
  }

  async execute(dto: CreateStoreDto): Promise<StoreEntity> {
    const Store = StoreAdapter.create(dto)
    return await this.storeRepository.createStore(Store)
  }
}
