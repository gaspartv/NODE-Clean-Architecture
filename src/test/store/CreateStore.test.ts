import CreateStore from '../../core/usecases/stores/CreateStore'
import StoreRepositoryMemory from '../../infra/repositories/StoreRepositoryMemory'

test('Should create a new store', async () => {
  const storeRepositoryMemory = new StoreRepositoryMemory()
  const createStore = new CreateStore(storeRepositoryMemory)
  const storeCreate = await createStore.execute({
    name: 'Teste',
    qrcode: '/image/qrcode.png',
    email: 'test@mail.com',
    cellphone: '32999887766',
    temporaryPassword: '123456',
  })
  expect(storeCreate.name).toBe('Teste')
  expect(storeCreate.qrcode).toBe('/image/qrcode.png')
  expect(storeCreate.email).toBe('test@mail.com')
  expect(storeCreate.cellphone).toBe('32999887766')
  expect(storeCreate.temporaryPassword).toBe('123456')
})
