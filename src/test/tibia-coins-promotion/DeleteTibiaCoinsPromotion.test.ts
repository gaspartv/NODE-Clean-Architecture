import DeleteTibiaCoinsPromotion from '../../core/usecases/tibia-coins-promotion/DeleteTibiaCoinsPromotion'
import TibiaCoinsPromotionRepositoryMemory from '../../infra/repositories/TibiaCoinsPromotionRepositoryMemory'

test('Should be able to delete a Tibia Coins Promotion', async () => {
  const tibiaCoinsPromotionRepositoryMemory =
    new TibiaCoinsPromotionRepositoryMemory()
  const deleteTibiaCoinsPromotion = new DeleteTibiaCoinsPromotion(
    tibiaCoinsPromotionRepositoryMemory
  )
  const tibiaCoinsPromotion = await deleteTibiaCoinsPromotion.execute('1')
  expect(tibiaCoinsPromotion.id).toBe('1')
  expect(tibiaCoinsPromotion.description).toBe('Tibia Coins Promotion')
  expect(tibiaCoinsPromotion.min).toBe(25)
  expect(tibiaCoinsPromotion.max).toBe(5000)
  expect(tibiaCoinsPromotion.price).toBe(46)
})
