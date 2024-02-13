import DeleteAccountLoyalty from '../../core/usecases/account-loyalty/DeleteAccountLoyalty'
import AccountLoyaltyRepositoryMemory from '../../infra/repositories/AccountLoyaltyRepositoryMemory'

test('Should be able to delete an account loyalty', async () => {
  const accountLoyaltyRepositoryMemory = new AccountLoyaltyRepositoryMemory()
  const deleteAccountLoyalty = new DeleteAccountLoyalty(
    accountLoyaltyRepositoryMemory
  )
  const accountLoyalty = await deleteAccountLoyalty.execute('1')
  expect(accountLoyalty.id).toBe('1')
  expect(accountLoyalty.percentage).toBe(10)
  expect(accountLoyalty.price).toBe(100)
})
