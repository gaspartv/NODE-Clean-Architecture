import { AppError } from '../../../domain/exceptions/errors'
import { ResponseAccountLoyaltyDto } from '../../dtos/account-loyalty/ResponseAccountLoyalty'
import AccountLoyaltyRepository from '../../repositories/AccountLoyaltyRepository'

export default class DeleteAccountLoyalty {
  accountLoyaltyRepository: AccountLoyaltyRepository

  constructor(accountLoyaltyRepository: AccountLoyaltyRepository) {
    this.accountLoyaltyRepository = accountLoyaltyRepository
  }

  async execute(id: string): Promise<ResponseAccountLoyaltyDto> {
    const accountLoyaltyFound =
      await this.accountLoyaltyRepository.getAccountLoyalty(id)

    if (!accountLoyaltyFound) {
      throw new AppError('account loyalty not found', 404)
    }

    const accountLoyalty =
      await this.accountLoyaltyRepository.deleteAccountLoyalty(id)

    return accountLoyalty
  }
}
