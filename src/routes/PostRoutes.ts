import { Router, Request, Response } from 'express'
import multerConfig from '../config/multerConfig'
import PostController from '../controllers/PostController'
import postModel from '../models/PostModel'

const routes: Router = require('express').Router()

const postController = new PostController(postModel)

routes.get('/', async (req: Request, res: Response) => {
    const posts = await postController.find()
    res.json({ posts })
})

routes.post(
    '/',
    multerConfig.single('file'),
    async (req: any, res: Response) => {
        const { originalname, filename, size, location } = req.file

        const post = await postController.save({
            name: originalname,
            key: filename,
            size: size,
            url: location,
        })

        return res.json({ post })
    }
)

routes.put('/:id', async (req: Request, res: Response) => {
    res.json({ response: 'Funcionou!' })
})

routes.delete('/:id', async (req: Request, res: Response) => {
    await postController.remove(req.params.id)
    res.json({ response: 'Excluído com sucesso!' })
})

export default routes
