import { CreateAccountLoyaltyDto } from '../dtos/account-loyalty/CreateAccountLoyalty'
import { UpdateAccountLoyaltyDto } from '../dtos/account-loyalty/UpdateAccountLoyalty'

interface AccountLoyaltyInterface {
  id: string
  percentage: number
  price: number
}

export class AccountLoyaltyEntity {
  private id: string
  private percentage: number
  private price: number

  constructor(dto: AccountLoyaltyInterface) {
    this.id = dto.id
    this.percentage = dto.percentage
    this.price = dto.price
  }

  get() {
    return {
      id: this.id,
      percentage: this.percentage,
      price: this.price,
    }
  }

  create(dto: CreateAccountLoyaltyDto) {
    this.percentage = dto.percentage
    this.price = dto.price
  }

  update(dto: UpdateAccountLoyaltyDto) {
    if (dto.percentage) this.percentage = dto.percentage
    if (dto.price) this.price = dto.price
  }
}
