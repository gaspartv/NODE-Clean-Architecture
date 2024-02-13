import GetStore from '../../core/usecases/stores/GetStore'
import StoreRepositoryMemory from '../../infra/repositories/StoreRepositoryMemory'

test("Should get a store's information", async () => {
  const storeRepositoryMemory = new StoreRepositoryMemory()
  const getStore = new GetStore(storeRepositoryMemory)
  const store = await getStore.execute()
  expect(store.name).toBe('Test')
  expect(store.qrcode).toBe('/image/qrcode.png')
  expect(store.email).toBe('test@mail.com')
  expect(store.cellphone).toBe('32999887766')
  expect(store.temporaryPassword).toBe('123456')
})
