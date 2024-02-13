import { AppError } from '../../domain/exceptions/errors'
import { getStore } from '../../frameworks/database/repositories/StoresRepository'

async function getStoresService() {
  const store = await getStore()

  if (!store) {
    return new AppError('store not found', 404)
  }

  return store
}

export { getStoresService }
