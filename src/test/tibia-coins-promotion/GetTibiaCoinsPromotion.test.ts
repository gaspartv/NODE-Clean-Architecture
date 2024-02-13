import GetTibiaCoinsPromotion from '../../core/usecases/tibia-coins-promotion/GetTibiaCoinsPromotion'
import TibiaCoinsPromotionRepositoryMemory from '../../infra/repositories/TibiaCoinsPromotionRepositoryMemory'

test('Should be able to get a Tibia Coins Promotion', async () => {
  const tibiaCoinsPromotionRepositoryMemory =
    new TibiaCoinsPromotionRepositoryMemory()
  const getTibiaCoinsPromotion = new GetTibiaCoinsPromotion(
    tibiaCoinsPromotionRepositoryMemory
  )
  const tibiaCoinsPromotion = await getTibiaCoinsPromotion.execute('1')
  expect(tibiaCoinsPromotion.id).toBe('1')
  expect(tibiaCoinsPromotion.description).toBe('Tibia Coins Promotion')
  expect(tibiaCoinsPromotion.min).toBe(25)
  expect(tibiaCoinsPromotion.max).toBe(5000)
  expect(tibiaCoinsPromotion.price).toBe(46)
})
