import { StoreEntity } from '../entities/Store'

export default interface StoreRepository {
  createStore(Entity: StoreEntity): Promise<StoreEntity>
  getStore(): Promise<StoreEntity>
  updateStore(id: string, Entity: StoreEntity): Promise<StoreEntity>
}
