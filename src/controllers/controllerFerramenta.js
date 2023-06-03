import {  createFerramenta,Ferramenta, getFerramenta, updateFer, getFerramentaCount, FindByPk, destroyFer } from "../models/modelFerramenta.js";

class FerramentaController {
    static async list(req,res){
        const ferramentas = await Ferramenta.findAll()
        res.json(ferramentas)
    }
    
    static async createFerramenta(req,res){
        const id = parseInt(req.params.id)
        console.log(req.body)
        const {nome, quantidade, arq2d, arq3d} = req.body
        if(!nome || !quantidade || !arq2d || !arq3d){
            res.status(400).json({ error: 'Nome, quantidade, arq2D, arq3D são obrigatórios'})
            return
        }
        const createdFerramenta = await Ferramenta.create ({id, nome, quantidade, arq2d, arq3d})
        res.status(210).json(createdFerramenta)
    }

    static async getFerramentaById(req, res) {
        const id = parseInt(req.params.id)
        const ferramenta = Ferramenta.FindByPk(id)
        if(!ferramenta){
            res.status(404).json({error: 'Ferramenta não encontrado'})
        }
        res.json(ferramenta)
    }
    static async destroyFerramenta(req,res) {
        const id = parseInt(req.params.id)
        const ferramenta = await Ferramenta.FindByPk(id)
        if(!ferramenta){
            res.status(404).json({error: "Ferramenta não encontrado"})
            return
        }
        await Ferramenta.destroyFer({where: {id: ferramenta.id}})
        res.json({message: "Ferramenta removido com sucesso"})
    }

    static async updateFerramenta(req,res) {
        const id = parseInt(req.params.id)
        const ferramenta = Ferramenta.FindByPk(id)
        if(!ferramenta) {
            res.status(404).json({error: "Ferramenta não encontrado"})
            return
        }

        const { nome, quantidade, arq2d, arq3d} = req.body
        if(!nome || !quantidade || !arq2d || !arq3d) {
            res.status(400).json({error: "O nome, Quantidade, Arquvivo 2D, Arquivo 3D, Data de Inscrição, Data de Alteração"})
            return
        }
        const updatedFerramenta = await Ferramenta.update({id, nome, quantidade, arq2d, arq3d})
        res.json(updatedFerramenta)
    }
}

export default FerramentaController