import { ResponseAccountLoyaltyDto } from '../../dtos/account-loyalty/ResponseAccountLoyalty'
import AccountLoyaltyRepository from '../../repositories/AccountLoyaltyRepository'

export default class ListAccountLoyalty {
  accountLoyaltyRepository: AccountLoyaltyRepository

  constructor(accountLoyaltyRepository: AccountLoyaltyRepository) {
    this.accountLoyaltyRepository = accountLoyaltyRepository
  }

  async execute(): Promise<ResponseAccountLoyaltyDto[]> {
    const accountLoyalty =
      await this.accountLoyaltyRepository.listAccountLoyalty()

    return accountLoyalty
  }
}
