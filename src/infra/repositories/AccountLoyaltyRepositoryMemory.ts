import { ResponseAccountLoyaltyDto } from '../../core/dtos/account-loyalty/ResponseAccountLoyalty'
import { AccountLoyaltyEntity } from '../../core/entities/AccountLoyalty'
import AccountLoyaltyRepository from '../../core/repositories/AccountLoyaltyRepository'

export default class AccountLoyaltyRepositoryMemory
  implements AccountLoyaltyRepository
{
  createAccountLoyalty(
    Entity: AccountLoyaltyEntity
  ): Promise<ResponseAccountLoyaltyDto> {
    return Promise.resolve(Entity.get())
  }
  getAccountLoyalty(id: string): Promise<ResponseAccountLoyaltyDto> {
    return Promise.resolve({
      id: '1',
      percentage: 10,
      price: 100,
    })
  }
  updateAccountLoyalty(
    id: string,
    Entity: AccountLoyaltyEntity
  ): Promise<ResponseAccountLoyaltyDto> {
    return Promise.resolve(Entity.get())
  }
  deleteAccountLoyalty(id: string): Promise<ResponseAccountLoyaltyDto> {
    return Promise.resolve({
      id: '1',
      percentage: 10,
      price: 100,
    })
  }
  listAccountLoyalty(): Promise<ResponseAccountLoyaltyDto[]> {
    return Promise.resolve([
      {
        id: '1',
        percentage: 10,
        price: 100,
      },
      {
        id: '2',
        percentage: 20,
        price: 200,
      },
      {
        id: '3',
        percentage: 30,
        price: 300,
      },
    ])
  }
}
