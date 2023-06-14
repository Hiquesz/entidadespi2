import { Maquinario, findByPk } from "../models/modelMaquinario.js";

class MaquinarioController {
    static async list(req,res){
        const maquinarios = await Maquinario.findAll()
        res.json(maquinarios)
    }

    static async createMaquinario(req,res){
        const id = parseInt(req.params.id)
        const {nome} = req.body
        if(!nome){
            res.status(400).json({ error: 'Nome são obrigatórios'})
            return
        }
        const createdMaquinario = await Maquinario.create ({id, nome})
        res.status(210).json(createdMaquinario)
    }

    static async getMaquinarioById(req, res) {
        const id = parseInt(req.params.id)
        const maquinario = await Maquinario.findByPk(id)
        if(!maquinario){
            res.status(404).json({error: 'Maquinario não encontrado'})
        }
        res.json(maquinario)

    }
    static async destroyMaquinario(req,res) {
        const id = parseInt(req.params.id)
        const maquinario = await Maquinario.findByPk(id)
        if(!maquinario){
            res.status(404).json({error: "Maquinario não encontrado"})
            return
        }
        await Maquinario.destroy({where: {id: maquinario.id}})
        res.json({message: "Maquinario removido com sucesso"})
    }

    static async updateMaquinario(req,res) {
        const id = parseInt(req.params.id)
        const maquinario = await Maquinario.findByPk(id)
        if(!maquinario) {
            res.status(404).json({error: "Maquinario não encontrado"})
            return
        }

        const { nome, dataIns, dataAlt} = req.body
        if(!nome || !dataIns || !dataAlt) {
            res.status(400).json({error: "O nome, Data de Inscrição, Data de Alteração"})
            return
        }
        const updatedMaquinario = await Maquinario.update({id,nome,dataIns,dataAlt})
        res.json(updatedMaquinario)
    }
}

export default MaquinarioController