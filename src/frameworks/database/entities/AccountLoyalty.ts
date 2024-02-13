import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account_loyalty')
class AccountLoyalty {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  percentage: number

  @Column()
  price: number
}

export default AccountLoyalty
