import { AppError } from '../../../domain/exceptions/errors'
import { ResponseAccountLoyaltyDto } from '../../dtos/account-loyalty/ResponseAccountLoyalty'
import AccountLoyaltyRepository from '../../repositories/AccountLoyaltyRepository'

export default class GetAccountLoyalty {
  accountLoyaltyRepository: AccountLoyaltyRepository

  constructor(accountLoyaltyRepository: AccountLoyaltyRepository) {
    this.accountLoyaltyRepository = accountLoyaltyRepository
  }

  async execute(id: string): Promise<ResponseAccountLoyaltyDto> {
    const accountLoyalty =
      await this.accountLoyaltyRepository.getAccountLoyalty(id)

    if (!accountLoyalty) {
      throw new AppError('account loyalty not found', 404)
    }

    return accountLoyalty
  }
}
