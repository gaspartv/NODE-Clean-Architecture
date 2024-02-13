import { randomUUID } from 'crypto'
import { CreateTibiaCoinsPromotionDto } from '../../dtos/tibia-coins-promotion.ts/CreateTibiaCoinsPromotion'
import { TibiaCoinsPromotionEntity } from '../../entities/TibiaCoinsPromotion'
import TibiaCoinsPromotionRepository from '../../repositories/TibiaCoinsPromotionRepository'

export default class CreateTibiaCoinsPromotion {
  tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository

  constructor(tibiaCoinsPromotionRepository: TibiaCoinsPromotionRepository) {
    this.tibiaCoinsPromotionRepository = tibiaCoinsPromotionRepository
  }

  async execute(dto: CreateTibiaCoinsPromotionDto) {
    const TibiaCoinsPromotion = new TibiaCoinsPromotionEntity({
      ...dto,
      id: randomUUID().toString(),
    })
    TibiaCoinsPromotion.create(dto)

    const tibiaCoinsPromotion =
      await this.tibiaCoinsPromotionRepository.createTibiaCoinsPromotion(
        TibiaCoinsPromotion
      )

    return tibiaCoinsPromotion
  }
}
