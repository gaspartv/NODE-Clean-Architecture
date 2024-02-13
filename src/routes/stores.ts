import { Router } from 'express'
import { getStoresController } from '../controllers/users/get'

const storesRoutes: Router = Router()

storesRoutes.get('', getStoresController)

export { storesRoutes }
