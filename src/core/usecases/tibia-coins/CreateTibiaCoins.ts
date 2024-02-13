import { randomUUID } from 'crypto'
import { CreateTibiaCoinsDto } from '../../dtos/tibia-coins/CreateTibiaCoins'
import { TibiaCoinsEntity } from '../../entities/TibiaCoins'
import TibiaCoinsRepository from '../../repositories/TibiaCoinsRepository'

export default class CreateTibiaCoins {
  tibiaCoinsRepository: TibiaCoinsRepository

  constructor(tibiaCoinsRepository: TibiaCoinsRepository) {
    this.tibiaCoinsRepository = tibiaCoinsRepository
  }

  async execute(dto: CreateTibiaCoinsDto) {
    const TibiaCoins = new TibiaCoinsEntity({
      ...dto,
      id: randomUUID().toString(),
    })
    TibiaCoins.create(dto)
    const tibiaCoins = await this.tibiaCoinsRepository.createTibiaCoins(
      TibiaCoins
    )
    return tibiaCoins
  }
}
