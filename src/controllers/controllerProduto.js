import { createProduto,findByPk, Produto ,getProduto, getProdutoCount, destroyProd, updateProd } from "../models/modelProduto.js";

class ProdutoController {
    static async list(req,res){
        const produtos = await Produto.findAll()
        res.json(produtos)
    }

    static async createProduto(req,res){
        const id = parseInt(req.params.id)
        const {nome, arq2d, arq3d, desc} = req.body
        if(!nome || !arq2d || !arq3d || !desc){
            res.status(400).json({ error: 'Nome, Arq2D, Arq3D, Descrição, Imagem são obrigatórios'})
            return
        }
        const createdProduto = await Produto.create ({id, nome, arq2d, arq3d, desc})
        res.status(210).json(createdProduto)
    }

    static async getProdutoById(req, res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if(!produto){
            res.status(404).json({error: 'Produto não encontrado'})
            return
        }
        res.json(produto)

    }
    static async destroyProduto(req,res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if(!produto){
            res.status(404).json({error: "Produto não encontrado"})
            return
        }
        await Produto.destroy({where: {id: produto.id}})
        res.json({message: "Produto removido com sucesso"})
    }

    static async updateProduto(req,res) {
        const id = parseInt(req.params.id)
        const produto = await Produto.findByPk(id)
        if(!produto) {
            res.status(404).json({error: "Produto não encontrado"})
            return
        }

        const { nome, arq2d, arq3d, desc, imagem} = req.body
        if(!nome || !arq2d || !arq3d || !desc || !imagem) {
            res.status(400).json({error: "O nome, Arquvivo 2D, Arquivo 3D, Descrição, Imagem"})
            return
        }
        const updatedProduto = await Produto.update({id, nome, arq2d, arq3d, desc, imagem})
        res.json(updatedProduto)
    }
}

export default ProdutoController