import { ResponseAccountLoyaltyDto } from '../dtos/account-loyalty/ResponseAccountLoyalty'
import { AccountLoyaltyEntity } from '../entities/AccountLoyalty'

export default interface AccountLoyaltyRepository {
  createAccountLoyalty(
    Entity: AccountLoyaltyEntity
  ): Promise<ResponseAccountLoyaltyDto>
  getAccountLoyalty(id: string): Promise<ResponseAccountLoyaltyDto>
  updateAccountLoyalty(
    id: string,
    Entity: AccountLoyaltyEntity
  ): Promise<ResponseAccountLoyaltyDto>
  deleteAccountLoyalty(id: string): Promise<ResponseAccountLoyaltyDto>
  listAccountLoyalty(): Promise<ResponseAccountLoyaltyDto[]>
}
