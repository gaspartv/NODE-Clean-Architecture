import { randomUUID } from 'crypto'
import { CreateAccountLoyaltyDto } from '../../dtos/account-loyalty/CreateAccountLoyalty'
import { AccountLoyaltyEntity } from '../../entities/AccountLoyalty'
import AccountLoyaltyRepository from '../../repositories/AccountLoyaltyRepository'

export default class CreateAccountLoyalty {
  accountLoyaltyRepository: AccountLoyaltyRepository

  constructor(accountLoyaltyRepository: AccountLoyaltyRepository) {
    this.accountLoyaltyRepository = accountLoyaltyRepository
  }

  async execute(dto: CreateAccountLoyaltyDto) {
    const AccountLoyalty = new AccountLoyaltyEntity({
      id: randomUUID().toString(),
      ...dto,
    })
    AccountLoyalty.create(dto)
    const accountLoyalty =
      await this.accountLoyaltyRepository.createAccountLoyalty(AccountLoyalty)
    return accountLoyalty
  }
}
