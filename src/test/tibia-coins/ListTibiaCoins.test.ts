import ListTibiaCoins from '../../core/usecases/tibia-coins/ListTibiaCoins'
import TibiaCoinsRepositoryMemory from '../../infra/repositories/TibiaCoinsRepositoryMemory'

test('Should be able to list tibia coins', async () => {
  const tibiaCoinsRepositoryMemory = new TibiaCoinsRepositoryMemory()
  const listTibiaCoins = new ListTibiaCoins(tibiaCoinsRepositoryMemory)
  const tibiaCoins = await listTibiaCoins.execute()
  expect(tibiaCoins[0].id).toBe('1')
  expect(tibiaCoins[0].code).toBe('tibia_coins')
  expect(tibiaCoins[0].name).toBe('Tibia Coins')
  expect(tibiaCoins[0].price).toBe(46)
  expect(tibiaCoins[0].amount).toBe(5000)
  expect(tibiaCoins[0].min).toBe(25)
  expect(tibiaCoins[0].img).toBe('/image/test.png')
  expect(tibiaCoins[0].step).toBe(25)
})
