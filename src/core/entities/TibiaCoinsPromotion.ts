import { randomUUID } from 'crypto'
import { CreateTibiaCoinsPromotionDto } from '../dtos/tibia-coins-promotion.ts/CreateTibiaCoinsPromotion'
import { UpdateTibiaCoinsPromotionDto } from '../dtos/tibia-coins-promotion.ts/UpdateTibiaCoinsPromotion'

interface TibiaCoinsPromotionInterface {
  id: string
  description: string
  min: number
  max: number
  price: number
}

export class TibiaCoinsPromotionEntity {
  private _id: string
  private _description: string
  private _min: number
  private _max: number
  private _price: number

  constructor(dto: TibiaCoinsPromotionInterface) {
    this._id = dto.id
    this._description = dto.description
    this._min = dto.min
    this._max = dto.max
    this._price = dto.price
  }

  get() {
    return {
      id: this._id,
      description: this._description,
      min: this._min,
      max: this._max,
      price: this._price,
    }
  }

  create(dto: CreateTibiaCoinsPromotionDto) {
    this._id = randomUUID().toString()
    this._description = dto.description
    this._min = dto.min
    this._max = dto.max
    this._price = dto.price
  }

  update(dto: UpdateTibiaCoinsPromotionDto) {
    if (dto.description) this._description = dto.description
    if (dto.min) this._min = dto.min
    if (dto.max) this._max = dto.max
    if (dto.price) this._price = dto.price
  }
}
