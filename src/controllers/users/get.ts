import { Request, Response } from 'express'
import { getStoresService } from '../../services/stores/get'

async function getStoresController(req: Request, res: Response) {
  const data = await getStoresService()
  return res.status(200).json(data)
}

export { getStoresController }
