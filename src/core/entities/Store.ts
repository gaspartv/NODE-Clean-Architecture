import { randomUUID } from 'crypto'
import { CreateStoreDto } from '../dtos/store/CreateStore'
import UpdateStoreDto from '../dtos/store/UpdateStore'

interface StoreEntityInterface {
  id: string
  name: string
  qrcode: string
  email: string
  cellphone: string
  temporaryPassword: string
}

export class StoreEntity {
  private _id: string
  private _name: string
  private _qrcode: string
  private _email: string
  private _cellphone: string
  private _temporaryPassword: string

  constructor(dto: StoreEntityInterface) {
    this._id = dto.id
    this._name = dto.name
    this._qrcode = dto.qrcode
    this._email = dto.email
    this._cellphone = dto.cellphone
    this._temporaryPassword = dto.temporaryPassword
  }

  get() {
    return {
      id: this._id,
      name: this._name,
      qrcode: this._qrcode,
      email: this._email,
      cellphone: this._cellphone,
      temporaryPassword: this._temporaryPassword,
    }
  }

  create(dto: CreateStoreDto) {
    this._id = randomUUID().toString()
    this._name = dto.name
    this._qrcode = dto.qrcode
    this._email = dto.email
    this._cellphone = dto.cellphone
    this._temporaryPassword = dto.temporaryPassword
  }

  update(dto: UpdateStoreDto) {
    if (dto.name) this._name = dto.name
    if (dto.qrcode) this._qrcode = dto.qrcode
    if (dto.email) this._email = dto.email
    if (dto.cellphone) this._cellphone = dto.cellphone
    if (dto.temporaryPassword) this._temporaryPassword = dto.temporaryPassword
  }
}
