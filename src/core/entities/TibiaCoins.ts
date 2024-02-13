import { randomUUID } from 'crypto'
import { CreateTibiaCoinsDto } from '../dtos/tibia-coins/CreateTibiaCoins'
import { UpdateTibiaCoinsDto } from '../dtos/tibia-coins/UpdateTibiaCoins'

interface TibiaCoinsInterface {
  id: string
  code: string
  name: string
  price: number
  amount: number
  min: number
  img: string
  step: number
}

export class TibiaCoinsEntity {
  private _id: string
  private _code: string
  private _name: string
  private _price: number
  private _amount: number
  private _min: number
  private _img: string
  private _step: number

  constructor(coins: TibiaCoinsInterface) {
    this._id = coins.id
    this._code = coins.code
    this._name = coins.name
    this._price = coins.price
    this._amount = coins.amount
    this._min = coins.min
    this._img = coins.img
    this._step = coins.step
  }

  get() {
    return {
      id: this._id,
      code: this._code,
      name: this._name,
      price: this._price,
      amount: this._amount,
      min: this._min,
      img: this._img,
      step: this._step,
    }
  }

  create(dto: CreateTibiaCoinsDto) {
    this._id = randomUUID().toString()
    this._code = dto.code
    this._name = dto.name
    this._price = dto.price
    this._amount = dto.amount
    this._min = dto.min
    this._img = dto.img
    this._step = dto.step
  }

  update(dto: UpdateTibiaCoinsDto) {
    if (dto.id) this._id = dto.id
    if (dto.code) this._code = dto.code
    if (dto.name) this._name = dto.name
    if (dto.price) this._price = dto.price
    if (dto.amount) this._amount = dto.amount
    if (dto.min) this._min = dto.min
    if (dto.img) this._img = dto.img
    if (dto.step) this._step = dto.step
  }
}
