import { ResponseTibiaCoinsPromotionDto } from '../dtos/tibia-coins-promotion.ts/ResponseTibiaCoinsPromotion'
import { TibiaCoinsPromotionEntity } from '../entities/TibiaCoinsPromotion'

export default interface TibiaCoinsPromotionRepository {
  createTibiaCoinsPromotion(
    Entity: TibiaCoinsPromotionEntity
  ): Promise<ResponseTibiaCoinsPromotionDto>
  getTibiaCoinsPromotion(id: string): Promise<ResponseTibiaCoinsPromotionDto>
  updateTibiaCoinsPromotion(
    id: string,
    Entity: TibiaCoinsPromotionEntity
  ): Promise<ResponseTibiaCoinsPromotionDto>
  listTibiaCoinsPromotions(): Promise<ResponseTibiaCoinsPromotionDto[]>
  deleteTibiaCoinsPromotion(id: string): Promise<ResponseTibiaCoinsPromotionDto>
}
