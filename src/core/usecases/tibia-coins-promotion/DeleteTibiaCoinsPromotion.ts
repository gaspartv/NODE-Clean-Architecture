import { ResponseTibiaCoinsPromotionDto } from '../../dtos/tibia-coins-promotion.ts/ResponseTibiaCoinsPromotion'
import TibiaCoinsPromotionRepository from '../../repositories/TibiaCoinsPromotionRepository'

export default class DeleteTibiaCoinsPromotion {
  tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository

  constructor(tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository) {
    this.tibiaCoinsPromotionRepository = tibiaCoinsPromotionRepository
  }

  async execute(id: string): Promise<ResponseTibiaCoinsPromotionDto> {
    const tibiaCoinsPromotion =
      await this.tibiaCoinsPromotionRepository.deleteTibiaCoinsPromotion(id)

    return tibiaCoinsPromotion
  }
}
