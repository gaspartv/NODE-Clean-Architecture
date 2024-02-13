import { ResponseTibiaCoinsDto } from '../../dtos/tibia-coins/ResponseTibiaCoins'
import { UpdateTibiaCoinsDto } from '../../dtos/tibia-coins/UpdateTibiaCoins'
import { TibiaCoinsEntity } from '../../entities/TibiaCoins'
import TibiaCoinsRepository from '../../repositories/TibiaCoinsRepository'

export default class UpdateTibiaCoins {
  tibiaCoinsRepository: TibiaCoinsRepository

  constructor(tibiaCoinsRepository: TibiaCoinsRepository) {
    this.tibiaCoinsRepository = tibiaCoinsRepository
  }

  async execute(
    id: string,
    dto: UpdateTibiaCoinsDto
  ): Promise<ResponseTibiaCoinsDto> {
    const tibiaCoinsFound = await this.tibiaCoinsRepository.getTibiaCoins(id)
    if (!tibiaCoinsFound) {
      throw new Error('Tibia Coins not found')
    }

    const TibiaCoins = new TibiaCoinsEntity(tibiaCoinsFound)
    TibiaCoins.update(dto)

    const tibiaCoins = await this.tibiaCoinsRepository.updateTibiaCoins(
      id,
      TibiaCoins
    )

    return tibiaCoins
  }
}
