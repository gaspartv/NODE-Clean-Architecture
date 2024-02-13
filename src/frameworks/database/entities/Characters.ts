import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('characters')
class Character {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  vocation: string

  @Column()
  level: number

  @Column()
  world: string

  @Column()
  description: string
}

export default Character
