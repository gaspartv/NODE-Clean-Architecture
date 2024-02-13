import { AppError } from '../../../domain/exceptions/errors'
import UpdateStoreDto from '../../dtos/store/UpdateStore'
import { StoreEntity } from '../../entities/Store'
import StoreRepository from '../../repositories/StoreRepository'

export default class UpdateStore {
  storeRepository: StoreRepository

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository
  }

  async execute(id: string, dto: UpdateStoreDto): Promise<StoreEntity> {
    const storeFound = await this.storeRepository.getStore()
    if (!storeFound) {
      throw new AppError('store not found', 404)
    }

    const Store = new StoreEntity()
    Store.set(storeFound.get())
    Store.update(dto)

    const store = await this.storeRepository.updateStore(id, Store)
    return store
  }
}
