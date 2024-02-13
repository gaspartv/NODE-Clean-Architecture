import { env } from '../../../config/env'
import { AppDataSource } from '../data-source'
import Store from '../entities/Stores'

const storesRepository = AppDataSource.getRepository(Store)

const getStore = (): Promise<Store | null> => {
  return storesRepository.findOne({
    where: { name: env.STORE_NAME },
  })
}

export { getStore }
