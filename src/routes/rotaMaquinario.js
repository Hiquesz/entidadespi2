import express from 'express'
import MaquinarioController from '../controllers/controllerMaquinario.js'

 const MaquinarioRouter = express.Router()
MaquinarioRouter.get('/', MaquinarioController.list)
MaquinarioRouter.post('/', MaquinarioController.createMaquinario)
MaquinarioRouter.get('/:id', MaquinarioController.getMaquinarioById)
MaquinarioRouter.delete('/:id', MaquinarioController.destroyMaquinario)
MaquinarioRouter.put('/:id', MaquinarioController.updateMaquinario)

export default MaquinarioRouter