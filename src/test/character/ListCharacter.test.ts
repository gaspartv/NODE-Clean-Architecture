import ListAccountLoyalty from '../../core/usecases/account-loyalty/ListAccountLoyalty'
import AccountLoyaltyRepositoryMemory from '../../infra/repositories/AccountLoyaltyRepositoryMemory'

test('Should be able to list account loyalty', async () => {
  const accountLoyaltyRepositoryMemory = new AccountLoyaltyRepositoryMemory()
  const listAccountLoyalty = new ListAccountLoyalty(
    accountLoyaltyRepositoryMemory
  )
  const accountLoyalty = await listAccountLoyalty.execute()
  expect(accountLoyalty[0].id).toBe('1')
  expect(accountLoyalty[0].percentage).toBe(10)
  expect(accountLoyalty[0].price).toBe(100)
})
