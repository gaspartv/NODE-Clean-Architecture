import UpdateAccountLoyalty from '../../core/usecases/account-loyalty/UpdateAccountLoyalty'
import AccountLoyaltyRepositoryMemory from '../../infra/repositories/AccountLoyaltyRepositoryMemory'

test('should be able to update a store', async () => {
  const accountLoyaltyRepositoryMemory = new AccountLoyaltyRepositoryMemory()
  const updateAccountLoyalty = new UpdateAccountLoyalty(
    accountLoyaltyRepositoryMemory
  )
  const accountLoyaltyUpdate = await updateAccountLoyalty.execute('1', {
    percentage: 10,
    price: 100,
  })
  expect(accountLoyaltyUpdate.percentage).toBe(10)
  expect(accountLoyaltyUpdate.price).toBe(100)
  expect(accountLoyaltyUpdate.id).toBe('1')
})
