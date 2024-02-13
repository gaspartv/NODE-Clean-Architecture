import UpdateTibiaCoins from '../../core/usecases/tibia-coins/UpdateTibiaCoins'
import TibiaCoinsRepositoryMemory from '../../infra/repositories/TibiaCoinsRepositoryMemory'

test('Should be able to update tibia coins', async () => {
  const tibiaCoinsRepositoryMemory = new TibiaCoinsRepositoryMemory()
  const updateTibiaCoins = new UpdateTibiaCoins(tibiaCoinsRepositoryMemory)
  const tibiaCoins = await updateTibiaCoins.execute('1', {
    code: 'tibia_coins',
    name: 'Tibia Coins',
    price: 46,
    amount: 5000,
    min: 25,
    img: '/image/test.png',
    step: 25,
  })

  expect(tibiaCoins.id).toBe('1')
  expect(tibiaCoins.code).toBe('tibia_coins')
  expect(tibiaCoins.name).toBe('Tibia Coins')
  expect(tibiaCoins.price).toBe(46)
})
