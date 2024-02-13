import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity('stores')
class Store {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string

  @Column('varchar', { length: 60 })
  name: string

  @Column('varchar')
  qrcode: string

  @Column('varchar')
  email: string

  @Column('varchar')
  cellphone: string

  @Column('varchar', { nullable: true })
  temporaryPassword: string

  constructor(
    id: string,
    name: string,
    qrcode: string,
    email: string,
    temporaryPassword: string
  ) {
    this.id = id
    this.name = name
    this.qrcode = qrcode
    this.email = email
    this.temporaryPassword = temporaryPassword
  }
}

export default Store
