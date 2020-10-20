import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import registerRoutes from '@routes/index'
import '@config/mongoDbConfig'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/check', (_: Request, res: Response) => res.json({ active: true }))
registerRoutes(app)

export default app
