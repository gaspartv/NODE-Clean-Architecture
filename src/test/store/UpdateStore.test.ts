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
  expect(storeUpdate.name).toBe('Teste edit')
  expect(storeUpdate.qrcode).toBe('/image/qrcode.png')
  expect(storeUpdate.email).toBe('test_edit@mail.com')
  expect(storeUpdate.cellphone).toBe('32999887711')
  expect(storeUpdate.temporaryPassword).toBe('123411')
})
