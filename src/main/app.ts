import cors from 'cors'
import express from 'express'
import path from 'path'
import 'reflect-metadata'
import { handleError } from '../domain/exceptions/errors'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use('/image', express.static(path.join(__dirname, '../static/image')))
// app.use('/stores', storesRoutes)
app.use(handleError)

export { app }
