import CreateTibiaCoinsPromotion from '../../core/usecases/tibia-coins-promotion/CreateTibiaCoinsPromotion'
import TibiaCoinsPromotionRepositoryMemory from '../../infra/repositories/TibiaCoinsPromotionRepositoryMemory'

test('Should be able to create a new Tibia Coins Promotion', async () => {
  const tibiaCoinsPromotionRepositoryMemory =
    new TibiaCoinsPromotionRepositoryMemory()
  const createTibiaCoinsPromotion = new CreateTibiaCoinsPromotion(
    tibiaCoinsPromotionRepositoryMemory
  )
  const tibiaCoinsPromotion = await createTibiaCoinsPromotion.execute({
    description: 'Tibia Coins Promotion',
    min: 25,
    max: 5000,
    price: 46,
  })
  expect(tibiaCoinsPromotion.description).toBe('Tibia Coins Promotion')
  expect(tibiaCoinsPromotion.min).toBe(25)
  expect(tibiaCoinsPromotion.max).toBe(5000)
  expect(tibiaCoinsPromotion.price).toBe(46)
})
