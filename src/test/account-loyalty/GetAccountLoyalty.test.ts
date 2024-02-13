import GetAccountLoyalty from '../../core/usecases/account-loyalty/GetAccountLoyalty'
import AccountLoyaltyRepositoryMemory from '../../infra/repositories/AccountLoyaltyRepositoryMemory'

test('Should find a account loyalty', async () => {
  const accountLoyaltyRepositoryMemory = new AccountLoyaltyRepositoryMemory()
  const getAccountLoyalty = new GetAccountLoyalty(
    accountLoyaltyRepositoryMemory
  )
  const accountLoyalty = await getAccountLoyalty.execute('1')
  expect(accountLoyalty.id).toBe('1')
  expect(accountLoyalty.percentage).toBe(10)
  expect(accountLoyalty.price).toBe(100)
})
