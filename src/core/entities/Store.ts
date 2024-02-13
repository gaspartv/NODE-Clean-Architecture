import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'
import { AppError } from '../../domain/exceptions/errors'
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

  get(): StoreEntityInterface {
    if (!this._id) throw new AppError('store id is not defined')
    if (!this._name) throw new AppError('store name is not defined')
    if (!this._qrcode) throw new AppError('store qrcode is not defined')
    if (!this._email) throw new AppError('store email is not defined')
    if (!this._cellphone) throw new AppError('store cellphone is not defined')
    if (!this._temporaryPassword)
      throw new AppError('store temporaryPassword is not defined')

    return {
      id: this._id,
      name: this._name,
      qrcode: this._qrcode,
      email: this._email,
      cellphone: this._cellphone,
      temporaryPassword: this._temporaryPassword,
    }
  }

  set(dto: StoreEntityInterface): void {
    this._id = dto.id
    this._name = dto.name
    this._qrcode = dto.qrcode
    this._email = dto.email
    this._cellphone = dto.cellphone
    this._temporaryPassword = dto.temporaryPassword
  }

  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 6)
  }

  comparePassword(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword)
  }

  create(dto: CreateStoreDto): void {
    this._id = randomUUID().toString()
    this._name = dto.name
    this._qrcode = dto.qrcode
    this._email = dto.email
    this._cellphone = dto.cellphone
    this._temporaryPassword = dto.temporaryPassword
  }

  update(dto: UpdateStoreDto): void {
    if (dto.name) this._name = dto.name
    if (dto.qrcode) this._qrcode = dto.qrcode
    if (dto.email) this._email = dto.email
    if (dto.cellphone) this._cellphone = dto.cellphone
    if (dto.temporaryPassword)
      this._temporaryPassword = this.hashPassword(dto.temporaryPassword)
  }
}
