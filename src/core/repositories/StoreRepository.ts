import { ResponseStoreDto } from '../dtos/store/ResponseStore'
import { StoreEntity } from '../entities/Store'

export default interface StoreRepository {
  createStore(Entity: StoreEntity): Promise<ResponseStoreDto>
  getStore(): Promise<ResponseStoreDto>
  updateStore(id: string, Entity: StoreEntity): Promise<ResponseStoreDto>
}
