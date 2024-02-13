import { ResponseTibiaCoinsPromotionDto } from '../../dtos/tibia-coins-promotion.ts/ResponseTibiaCoinsPromotion'
import TibiaCoinsPromotionRepository from '../../repositories/TibiaCoinsPromotionRepository'

export default class GetTibiaCoinsPromotion {
  tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository

  constructor(tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository) {
    this.tibiaCoinsPromotionRepository = tibiaCoinsPromotionRepository
  }

  async execute(id: string): Promise<ResponseTibiaCoinsPromotionDto> {
    const tibiaCoinsPromotion =
      await this.tibiaCoinsPromotionRepository.getTibiaCoinsPromotion(id)
    return tibiaCoinsPromotion
  }
}
