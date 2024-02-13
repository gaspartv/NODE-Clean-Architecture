import { CreateAccountLoyaltyDto } from '../dtos/account-loyalty/CreateAccountLoyalty'
import { UpdateAccountLoyaltyDto } from '../dtos/account-loyalty/UpdateAccountLoyalty'

interface AccountLoyaltyInterface {
  id: string
  percentage: number
  price: number
}

export class AccountLoyaltyEntity {
  private _id: string
  private _percentage: number
  private _price: number

  constructor(dto: AccountLoyaltyInterface) {
    this._id = dto.id
    this._percentage = dto.percentage
    this._price = dto.price
  }

  get() {
    return {
      id: this._id,
      percentage: this._percentage,
      price: this._price,
    }
  }

  create(dto: CreateAccountLoyaltyDto) {
    this._percentage = dto.percentage
    this._price = dto.price
  }

  update(dto: UpdateAccountLoyaltyDto) {
    if (dto.percentage) this._percentage = dto.percentage
    if (dto.price) this._price = dto.price
  }
}
