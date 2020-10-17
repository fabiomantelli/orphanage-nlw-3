import { Router } from 'express'
import multer from 'multer'
import OrphanagesController from './controllers/OrphanagesController'

import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)

// controler padrão: index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

export default routes;