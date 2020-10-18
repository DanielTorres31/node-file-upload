import { Router, Request, Response } from "express"
import multerConfig from '@config/multerConfig'

const routes: Router = require('express').Router()

routes.post('/posts', multerConfig.single("file"), (req: Request, res: Response) => {

    console.log(req.file)
    return res.json({ response: 'OK' })
})

export default routes