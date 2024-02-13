import { ResponseTibiaCoinsPromotionDto } from '../../core/dtos/tibia-coins-promotion.ts/ResponseTibiaCoinsPromotion'
import { TibiaCoinsPromotionEntity } from '../../core/entities/TibiaCoinsPromotion'
import TibiaCoinsPromotionRepository from '../../core/repositories/TibiaCoinsPromotionRepository'

export default class TibiaCoinsPromotionRepositoryMemory
  implements TibiaCoinsPromotionRepository
{
  createTibiaCoinsPromotion(
    Entity: TibiaCoinsPromotionEntity
  ): Promise<ResponseTibiaCoinsPromotionDto> {
    return Promise.resolve(Entity.get())
  }
  getTibiaCoinsPromotion(id: string): Promise<ResponseTibiaCoinsPromotionDto> {
    return Promise.resolve({
      id: id,
      description: 'Tibia Coins Promotion',
      min: 25,
      max: 5000,
      price: 46,
    })
  }
  updateTibiaCoinsPromotion(
    id: string,
    Entity: TibiaCoinsPromotionEntity
  ): Promise<ResponseTibiaCoinsPromotionDto> {
    return Promise.resolve(Entity.get())
  }
  listTibiaCoinsPromotions(): Promise<ResponseTibiaCoinsPromotionDto[]> {
    return Promise.resolve([
      {
        id: '1',
        description: 'Tibia Coins Promotion',
        min: 25,
        max: 5000,
        price: 46,
      },
      {
        id: '2',
        description: 'Tibia Coins Promotion',
        min: 25,
        max: 5000,
        price: 46,
      },
      {
        id: '3',
        description: 'Tibia Coins Promotion',
        min: 25,
        max: 5000,
        price: 46,
      },
    ])
  }
  deleteTibiaCoinsPromotion(
    id: string
  ): Promise<ResponseTibiaCoinsPromotionDto> {
    return Promise.resolve({
      id: id,
      description: 'Tibia Coins Promotion',
      min: 25,
      max: 5000,
      price: 46,
    })
  }
}
