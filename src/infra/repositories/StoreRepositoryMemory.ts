import StoreAdapter from '../../adapter/StoreAdapter'
import { StoreEntity } from '../../core/entities/Store'
import StoreRepository from '../../core/repositories/StoreRepository'

export default class StoreRepositoryMemory implements StoreRepository {
  createStore(Entity: StoreEntity): Promise<StoreEntity> {
    const store = StoreAdapter.create(Entity.get())
    return Promise.resolve(store)
  }

  updateStore(id: string, Entity: StoreEntity): Promise<StoreEntity> {
    return Promise.resolve(Entity)
  }

  getStore(): Promise<StoreEntity> {
    const Store = StoreAdapter.create({
      name: 'Test',
      qrcode: '/image/qrcode.png',
      email: 'test@mail.com',
      cellphone: '32999887766',
      temporaryPassword: '123456',
    })
    return Promise.resolve(Store)
  }
}
