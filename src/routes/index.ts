import { Application } from 'express'
import PostRoutes from './PostRoutes'

const registerRoutes = (app: Application) => {
    app.use('/posts', PostRoutes)
}

export default registerRoutes
