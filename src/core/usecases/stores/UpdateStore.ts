import { AppError } from '../../../domain/exceptions/errors'
import { ResponseStoreDto } from '../../dtos/store/ResponseStore'
import UpdateStoreDto from '../../dtos/store/UpdateStore'
import { StoreEntity } from '../../entities/Store'
import StoreRepository from '../../repositories/StoreRepository'

export default class UpdateStore {
  storeRepository: StoreRepository

  constructor(storeRepository: StoreRepository) {
    this.storeRepository = storeRepository
  }

  async execute(id: string, dto: UpdateStoreDto): Promise<ResponseStoreDto> {
    const storeFound = await this.storeRepository.getStore()
    if (!storeFound) {
      throw new AppError('store not found', 404)
    }
    const Store = new StoreEntity({
      ...storeFound,
    })
    Store.update(dto)
    const store = await this.storeRepository.updateStore(id, Store)
    return store
  }
}
