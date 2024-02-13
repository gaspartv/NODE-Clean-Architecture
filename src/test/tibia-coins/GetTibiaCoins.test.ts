import GetTibiaCoins from '../../core/usecases/tibia-coins/GetTibiaCoins'
import TibiaCoinsRepositoryMemory from '../../infra/repositories/TibiaCoinsRepositoryMemory'

test('Should be able to get a character', async () => {
  const tibiaCoinsRepositoryMemory = new TibiaCoinsRepositoryMemory()
  const getTibiaCoins = new GetTibiaCoins(tibiaCoinsRepositoryMemory)
  const tibiaCoins = await getTibiaCoins.execute('1')
  expect(tibiaCoins.id).toBe('1')
  expect(tibiaCoins.code).toBe('tibia_coins')
  expect(tibiaCoins.name).toBe('Tibia Coins')
  expect(tibiaCoins.price).toBe(46)
  expect(tibiaCoins.amount).toBe(5000)
})
