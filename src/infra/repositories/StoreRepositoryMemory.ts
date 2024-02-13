import { randomUUID } from 'crypto'
import { ResponseStoreDto } from '../../core/dtos/store/ResponseStore'
import { StoreEntity } from '../../core/entities/Store'
import StoreRepository from '../../core/repositories/StoreRepository'

export default class StoreRepositoryMemory implements StoreRepository {
  createStore(Entity: StoreEntity): Promise<ResponseStoreDto> {
    return Promise.resolve(Entity.get())
  }

  updateStore(id: string, Entity: StoreEntity): Promise<ResponseStoreDto> {
    return Promise.resolve(Entity.get())
  }

  getStore(): Promise<ResponseStoreDto> {
    return Promise.resolve({
      id: randomUUID().toString(),
      name: 'Test',
      qrcode: '/image/qrcode.png',
      email: 'test@mail.com',
      cellphone: '32999887766',
      temporaryPassword: '123456',
    })
  }
}
