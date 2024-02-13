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
  private id: string
  private name: string
  private qrcode: string
  private email: string
  private cellphone: string
  private temporaryPassword: string

  constructor(dto: StoreEntityInterface) {
    this.id = dto.id
    this.name = dto.name
    this.qrcode = dto.qrcode
    this.email = dto.email
    this.cellphone = dto.cellphone
    this.temporaryPassword = dto.temporaryPassword
  }

  get(): {
    id: string
    name: string
    qrcode: string
    email: string
    cellphone: string
    temporaryPassword: string
  } {
    return {
      id: this.id,
      name: this.name,
      qrcode: this.qrcode,
      email: this.email,
      cellphone: this.cellphone,
      temporaryPassword: this.temporaryPassword,
    }
  }

  create(dto: CreateStoreDto) {
    this.id = randomUUID().toString()
    this.name = dto.name
    this.qrcode = dto.qrcode
    this.email = dto.email
    this.cellphone = dto.cellphone
    this.temporaryPassword = dto.temporaryPassword
  }

  update(dto: UpdateStoreDto) {
    if (dto.name) this.name = dto.name
    if (dto.qrcode) this.qrcode = dto.qrcode
    if (dto.email) this.email = dto.email
    if (dto.cellphone) this.cellphone = dto.cellphone
    if (dto.temporaryPassword) this.temporaryPassword = dto.temporaryPassword
  }
}
