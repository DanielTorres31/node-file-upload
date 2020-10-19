import { Router, Request, Response } from 'express'
import multerConfig from '@config/multerConfig'
import PostController from '@controllers/PostController'
import postModel from '@models/PostModel'

const routes: Router = require('express').Router()

const postController = new PostController(postModel)

routes.post(
    '/posts',
    multerConfig.single('file'),
    (req: Request, res: Response) => {
        console.log(req.file)
        return res.json({ response: 'OK' })
    }
)

export default routes
