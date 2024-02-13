import { env } from '../config/env'
import { AppDataSource } from '../frameworks/database/data-source'
import { app } from './app'

const PORT = env.PORT

AppDataSource.initialize().then(async () => {
  app.listen(PORT, () => console.info(`Server is running on port ${PORT}`))
})
