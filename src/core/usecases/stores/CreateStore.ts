import { randomUUID } from 'crypto'
import { CreateStoreDto } from '../../dtos/store/CreateStore'
import { ResponseStoreDto } from '../../dtos/store/ResponseStore'
import { StoreEntity } from '../../entities/Store'
import StoreRepository from '../../repositories/StoreRepository'

export default class CreateStore {
  storeRepository: StoreRepository

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository
  }

  async execute(dto: CreateStoreDto): Promise<ResponseStoreDto> {
    const Store = new StoreEntity({ id: randomUUID().toString(), ...dto })
    Store.create(dto)
    const store = await this.storeRepository.createStore(Store)
    return store
  }
}
