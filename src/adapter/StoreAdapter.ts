import { CreateStoreDto } from '../core/dtos/store/CreateStore'
import { ResponseStoreDto } from '../core/dtos/store/ResponseStore'
import UpdateStoreDto from '../core/dtos/store/UpdateStore'
import { StoreEntity } from '../core/entities/Store'

export default class StoreAdapter {
  static create(dto: CreateStoreDto) {
    const Store = new StoreEntity()
    Store.create(dto)
    return Store
  }

  static update(storeFound: ResponseStoreDto, dto: UpdateStoreDto) {
    const Store = new StoreEntity()
    Store.set(storeFound)
    Store.update(dto)
    return Store
  }

  static get() {}
}
