import { AppError } from '../../../domain/exceptions/errors'
import { ResponseAccountLoyaltyDto } from '../../dtos/account-loyalty/ResponseAccountLoyalty'
import { UpdateAccountLoyaltyDto } from '../../dtos/account-loyalty/UpdateAccountLoyalty'
import { AccountLoyaltyEntity } from '../../entities/AccountLoyalty'
import AccountLoyaltyRepository from '../../repositories/AccountLoyaltyRepository'

export default class UpdateAccountLoyalty {
  accountLoyaltyRepository: AccountLoyaltyRepository

  constructor(accountLoyaltyRepository: AccountLoyaltyRepository) {
    this.accountLoyaltyRepository = accountLoyaltyRepository
  }

  async execute(
    id: string,
    dto: UpdateAccountLoyaltyDto
  ): Promise<ResponseAccountLoyaltyDto> {
    const accountLoyaltyFound =
      await this.accountLoyaltyRepository.getAccountLoyalty(id)

    if (!accountLoyaltyFound) {
      throw new AppError('account loyalty not found', 404)
    }

    const AccountLoyalty = new AccountLoyaltyEntity({
      ...accountLoyaltyFound,
    })
    AccountLoyalty.update(dto)

    const accountLoyalty =
      await this.accountLoyaltyRepository.updateAccountLoyalty(
        id,
        AccountLoyalty
      )

    return accountLoyalty
  }
}
