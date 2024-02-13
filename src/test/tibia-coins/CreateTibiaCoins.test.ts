import CreateTibiaCoins from '../../core/usecases/tibia-coins/CreateTibiaCoins'
import TibiaCoinsRepositoryMemory from '../../infra/repositories/TibiaCoinsRepositoryMemory'

test('Should be able to create a new Tibia Coins', async () => {
  const tibiaCoinsRepositoryMemory = new TibiaCoinsRepositoryMemory()
  const createTibiaCoins = new CreateTibiaCoins(tibiaCoinsRepositoryMemory)
  const tibiaCoins = await createTibiaCoins.execute({
    code: 'tibia_coins',
    name: 'Tibia Coins',
    price: 46,
    amount: 5000,
    min: 25,
    img: '/image/test.png',
    step: 25,
  })
  expect(tibiaCoins.code).toBe('tibia_coins')
  expect(tibiaCoins.name).toBe('Tibia Coins')
  expect(tibiaCoins.price).toBe(46)
  expect(tibiaCoins.amount).toBe(5000)
})
