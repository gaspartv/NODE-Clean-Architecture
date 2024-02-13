import path from 'path'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import AccountLoyalty from './entities/AccountLoyalty'
import Character from './entities/Characters'
import Store from './entities/Stores'
import TibiaCoins from './entities/TibiaCoins'
import TibiaCoinsPromotion from './entities/TibiaCoinsPromotion'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'docker',
  password: 'docker',
  database: 'thygas_coins',
  synchronize: true,
  logging: false,
  entities: [AccountLoyalty, Character, Store, TibiaCoins, TibiaCoinsPromotion],
  migrations: [path.join(__dirname, './migrations/*.{js,ts}')],
  subscribers: [],
})
