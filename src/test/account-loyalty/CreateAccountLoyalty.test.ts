import CreateAccountLoyalty from '../../core/usecases/account-loyalty/CreateAccountLoyalty'
import AccountLoyaltyRepositoryMemory from '../../infra/repositories/AccountLoyaltyRepositoryMemory'

test('Should be able to create a new account loyalty', async () => {
  const accountLoyaltyRepositoryMemory = new AccountLoyaltyRepositoryMemory()
  const createAccountLoyalty = new CreateAccountLoyalty(
    accountLoyaltyRepositoryMemory
  )
  const accountLoyalty = await createAccountLoyalty.execute({
    percentage: 10,
    price: 100,
  })
  expect(accountLoyalty.percentage).toBe(10)
  expect(accountLoyalty.price).toBe(100)
})
