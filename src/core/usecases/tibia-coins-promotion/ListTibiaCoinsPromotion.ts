import { ResponseTibiaCoinsPromotionDto } from '../../dtos/tibia-coins-promotion.ts/ResponseTibiaCoinsPromotion'
import TibiaCoinsPromotionRepository from '../../repositories/TibiaCoinsPromotionRepository'

export default class ListTibiaCoinsPromotion {
  tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository

  constructor(tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository) {
    this.tibiaCoinsPromotionRepository = tibiaCoinsPromotionRepository
  }

  async execute(): Promise<ResponseTibiaCoinsPromotionDto[]> {
    const tibiaCoinsPromotion =
      await this.tibiaCoinsPromotionRepository.listTibiaCoinsPromotions()
    return tibiaCoinsPromotion
  }
}
