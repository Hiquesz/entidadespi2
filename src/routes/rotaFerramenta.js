import express from 'express'
import FerramentaController from '../controllers/controllerFerramenta.js'

 const FerramentaRouter = express.Router()
FerramentaRouter.get('/', FerramentaController.list)
FerramentaRouter.post('/', FerramentaController.createFerramenta)
FerramentaRouter.get('/:id', FerramentaController.getFerramentaById)
FerramentaRouter.delete('/:id', FerramentaController.destroyFerramenta)
FerramentaRouter.put('/:id', FerramentaController.updateFerramenta)

export default FerramentaRouter