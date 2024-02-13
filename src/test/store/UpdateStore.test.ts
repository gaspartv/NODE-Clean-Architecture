import UpdateStore from '../../core/usecases/stores/UpdateStore'
import StoreRepositoryMemory from '../../infra/repositories/StoreRepositoryMemory'

test('Should be able to update a store', async () => {
  const storeRepositoryMemory = new StoreRepositoryMemory()
  const updateStore = new UpdateStore(storeRepositoryMemory)
  const storeUpdate = await updateStore.execute('1', {
    name: 'Teste edit',
    qrcode: '/image/qrcode.png',
    email: 'test_edit@mail.com',
    cellphone: '32999887711',
    temporaryPassword: '123411',
  })
  const store = storeUpdate.get()
  expect(store.name).toBe('Teste edit')
  expect(store.qrcode).toBe('/image/qrcode.png')
  expect(store.email).toBe('test_edit@mail.com')
  expect(store.cellphone).toBe('32999887711')
  expect(store.temporaryPassword).not.toBe('123411')
})
