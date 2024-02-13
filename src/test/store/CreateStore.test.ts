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
  const store = storeCreate.get()
  expect(store.name).toBe('Teste')
  expect(store.qrcode).toBe('/image/qrcode.png')
  expect(store.email).toBe('test@mail.com')
  expect(store.cellphone).toBe('32999887766')
  expect(store.temporaryPassword).toBe('123456')
})
