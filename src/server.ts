import dotenv from 'dotenv'
dotenv.config()

import express, { Application } from 'express'
import morgan from 'morgan'
import registerRoutes from './routes'
import './config/mongoDbConfig'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

registerRoutes(app)

export default app
