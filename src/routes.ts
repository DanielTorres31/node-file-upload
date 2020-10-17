import { Router, Request, Response } from "express"

const routes: Router = require('express').Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ response: 'OK' })
})

export default routes