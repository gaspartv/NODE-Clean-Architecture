import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tibia_coins')
class TibiaCoins {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  code: string

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  amount: number

  @Column()
  min: number

  @Column()
  img: string

  @Column()
  step: number
}

export default TibiaCoins
