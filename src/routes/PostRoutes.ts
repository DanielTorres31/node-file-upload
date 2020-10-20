import { Router, Request, Response } from 'express'
import multerConfig from '@config/multerConfig'
import PostController from '@controllers/PostController'
import postModel from '@models/PostModel'

const routes: Router = require('express').Router()

const postController = new PostController(postModel)

routes.post(
    '/',
    multerConfig.single('file'),
    async (req: Request, res: Response) => {
        const { originalname, filename, size } = req.file

        const createdPost = await postController.save({
            name: originalname,
            key: filename,
            size: size,
        })

        return res.json({
            response: 'Arquivo salvo com sucesso!',
            post: createdPost,
        })
    }
)

export default routes
