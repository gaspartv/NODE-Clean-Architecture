import ListTibiaCoinsPromotion from '../../core/usecases/tibia-coins-promotion/ListTibiaCoinsPromotion'
import TibiaCoinsPromotionRepositoryMemory from '../../infra/repositories/TibiaCoinsPromotionRepositoryMemory'

test('Should be able to list all Tibia Coins Promotions', async () => {
  const tibiaCoinsPromotionRepositoryMemory =
    new TibiaCoinsPromotionRepositoryMemory()
  const listTibiaCoinsPromotion = new ListTibiaCoinsPromotion(
    tibiaCoinsPromotionRepositoryMemory
  )
  const tibiaCoinsPromotions = await listTibiaCoinsPromotion.execute()
  expect(tibiaCoinsPromotions[0].id).toBe('1')
  expect(tibiaCoinsPromotions[0].description).toBe('Tibia Coins Promotion')
  expect(tibiaCoinsPromotions[0].min).toBe(25)
  expect(tibiaCoinsPromotions[0].max).toBe(5000)
  expect(tibiaCoinsPromotions[0].price).toBe(46)
})
