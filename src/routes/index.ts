import express, { Application, Request, Response } from 'express'
import path from 'path'
import PostRoutes from './PostRoutes'

const registerRoutes = (app: Application) => {
    app.get('/check', (_: Request, res: Response) => res.json({ active: true }))
    app.use('/posts', PostRoutes)
    app.use(
        '/files',
        express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    )
    app.get('*', (_: Request, res: Response) => res.send('404 Not Found'))
}

export default registerRoutes
