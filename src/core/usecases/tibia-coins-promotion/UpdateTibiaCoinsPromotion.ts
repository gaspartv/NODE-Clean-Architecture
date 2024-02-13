import { ResponseTibiaCoinsPromotionDto } from '../../dtos/tibia-coins-promotion.ts/ResponseTibiaCoinsPromotion'
import { UpdateTibiaCoinsPromotionDto } from '../../dtos/tibia-coins-promotion.ts/UpdateTibiaCoinsPromotion'
import { TibiaCoinsPromotionEntity } from '../../entities/TibiaCoinsPromotion'
import TibiaCoinsPromotionRepository from '../../repositories/TibiaCoinsPromotionRepository'

export default class UpdateTibiaCoinsPromotion {
  tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository

  constructor(tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository) {
    this.tibiaCoinsPromotionRepository = tibiaCoinsPromotionRepository
  }

  async execute(
    id: string,
    dto: UpdateTibiaCoinsPromotionDto
  ): Promise<ResponseTibiaCoinsPromotionDto> {
    const tibiaCoinsPromotionFound =
      await this.tibiaCoinsPromotionRepository.getTibiaCoinsPromotion(id)

    if (!tibiaCoinsPromotionFound) {
      throw new Error('Tibia Coins Promotion not found')
    }

    const TibiaCoinsPromotion = new TibiaCoinsPromotionEntity(
      tibiaCoinsPromotionFound
    )

    const tibiaCoinsPromotion =
      await this.tibiaCoinsPromotionRepository.updateTibiaCoinsPromotion(
        id,
        TibiaCoinsPromotion
      )

    return tibiaCoinsPromotion
  }
}
