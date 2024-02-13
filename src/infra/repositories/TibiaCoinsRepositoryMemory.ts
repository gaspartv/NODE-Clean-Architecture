import { ResponseTibiaCoinsDto } from '../../core/dtos/tibia-coins/ResponseTibiaCoins'
import { TibiaCoinsEntity } from '../../core/entities/TibiaCoins'
import TibiaCoinsRepository from '../../core/repositories/TibiaCoinsRepository'

export default class TibiaCoinsRepositoryMemory
  implements TibiaCoinsRepository
{
  createTibiaCoins(Entity: TibiaCoinsEntity): Promise<ResponseTibiaCoinsDto> {
    return Promise.resolve(Entity.get())
  }
  getTibiaCoins(id: string): Promise<ResponseTibiaCoinsDto> {
    return Promise.resolve({
      id: id,
      code: 'tibia_coins',
      name: 'Tibia Coins',
      price: 46,
      amount: 5000,
      min: 25,
      img: '/image/test.png',
      step: 25,
    })
  }
  updateTibiaCoins(
    id: string,
    Entity: TibiaCoinsEntity
  ): Promise<ResponseTibiaCoinsDto> {
    return Promise.resolve(Entity.get())
  }
  listTibiaCoins(): Promise<ResponseTibiaCoinsDto[]> {
    return Promise.resolve([
      {
        id: '1',
        code: 'tibia_coins',
        name: 'Tibia Coins',
        price: 46,
        amount: 5000,
        min: 25,
        img: '/image/test.png',
        step: 25,
      },
      {
        id: '2',
        code: 'tibia_coins',
        name: 'Tibia Coins',
        price: 46,
        amount: 5000,
        min: 25,
        img: '/image/test.png',
        step: 25,
      },
      {
        id: '3',
        code: 'tibia_coins',
        name: 'Tibia Coins',
        price: 46,
        amount: 5000,
        min: 25,
        img: '/image/test.png',
        step: 25,
      },
    ])
  }
}
