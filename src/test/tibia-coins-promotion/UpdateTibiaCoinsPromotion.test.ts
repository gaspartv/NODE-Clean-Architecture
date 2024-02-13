import UpdateTibiaCoinsPromotion from '../../core/usecases/tibia-coins-promotion/UpdateTibiaCoinsPromotion'
import TibiaCoinsPromotionRepositoryMemory from '../../infra/repositories/TibiaCoinsPromotionRepositoryMemory'

test('Should be able to update a Tibia Coins Promotion', async () => {
  const tibiaCoinsPromotionRepositoryMemory =
    new TibiaCoinsPromotionRepositoryMemory()
  const updateTibiaCoinsPromotion = new UpdateTibiaCoinsPromotion(
    tibiaCoinsPromotionRepositoryMemory
  )
  const tibiaCoinsPromotion = await updateTibiaCoinsPromotion.execute('1', {
    description: 'Tibia Coins Promotion',
    min: 25,
    max: 5000,
    price: 46,
  })
  expect(tibiaCoinsPromotion.id).toBe('1')
  expect(tibiaCoinsPromotion.description).toBe('Tibia Coins Promotion')
  expect(tibiaCoinsPromotion.min).toBe(25)
  expect(tibiaCoinsPromotion.max).toBe(5000)
  expect(tibiaCoinsPromotion.price).toBe(46)
})
