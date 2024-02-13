import { ResponseTibiaCoinsDto } from '../../dtos/tibia-coins/ResponseTibiaCoins'
import TibiaCoinsRepository from '../../repositories/TibiaCoinsRepository'

export default class GetTibiaCoins {
  tibiaCoinsRepository: TibiaCoinsRepository

  constructor(tibiaCoinsRepository: TibiaCoinsRepository) {
    this.tibiaCoinsRepository = tibiaCoinsRepository
  }

  async execute(id: string): Promise<ResponseTibiaCoinsDto> {
    const tibiaCoins = await this.tibiaCoinsRepository.getTibiaCoins(id)

    return tibiaCoins
  }
}
