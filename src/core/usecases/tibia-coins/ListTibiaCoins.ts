import { ResponseTibiaCoinsDto } from '../../dtos/tibia-coins/ResponseTibiaCoins'
import TibiaCoinsRepository from '../../repositories/TibiaCoinsRepository'

export default class ListTibiaCoins {
  tibiaCoinsRepository: TibiaCoinsRepository

  constructor(tibiaCoinsRepository: TibiaCoinsRepository) {
    this.tibiaCoinsRepository = tibiaCoinsRepository
  }

  async execute(): Promise<ResponseTibiaCoinsDto[]> {
    const tibiaCoins = await this.tibiaCoinsRepository.listTibiaCoins()

    return tibiaCoins
  }
}
