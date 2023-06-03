import { Sequelize } from "sequelize"
import db from "../../db.js"

export const Produto = db.define('Produto', {
        id: {
            type: Sequelize.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        arq2d: {
            type: Sequelize.STRING,
            allowNull: false
        },
        arq3d: {
            type: Sequelize.STRING,
            allowNull: false
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: true
        },
        imagem: {
            type: Sequelize.BLOB,
            allowNull: true
        }
    }
)

export const destroyProd = (id) => {
    const produto = FindByPk(id)
    if(!produto) {
        return false
    }
    const index = dbProduto.indexOf(produto)
    dbProduto.splice(index, 1)
    return true
}

export const FindByPk = (id) => {
    return dbProduto.find(produto=> produto.id === id)
}

export const updateProd = (id,produto) => {
    const produtoToUpdate = FindByPk(id)
    if(!produtoToUpdate) {
        return false
    }

    const index = dbProduto.indexOf(produtoToUpdate)
    dbProduto[index] = produto
    return true
}

 export const getProduto = () => {
    return dbProduto
}

export const getProdutoCount = () => {
    return db.define.length 
}

export const createProduto = (produto) => {
    dbProduto.push(produto)
}

 export const dbProduto = [
    new Produto(0,'nome', 'arq2d', 'arq3d', 'desc', 'imagem', 'dataIns', 'dataAlt'),
 ]
