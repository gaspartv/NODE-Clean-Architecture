import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tibia_coins_promotions')
class TibiaCoinsPromotion {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  description: string

  @Column()
  min: number

  @Column()
  max: number

  @Column()
  price: number
}

export default TibiaCoinsPromotion
