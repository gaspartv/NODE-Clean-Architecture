import { ResponseTibiaCoinsDto } from '../dtos/tibia-coins/ResponseTibiaCoins'
import { TibiaCoinsEntity } from '../entities/TibiaCoins'

export default interface TibiaCoinsRepository {
  createTibiaCoins(Entity: TibiaCoinsEntity): Promise<ResponseTibiaCoinsDto>
  getTibiaCoins(id: string): Promise<ResponseTibiaCoinsDto>
  updateTibiaCoins(
    id: string,
    Entity: TibiaCoinsEntity
  ): Promise<ResponseTibiaCoinsDto>
  listTibiaCoins(): Promise<ResponseTibiaCoinsDto[]>
}
