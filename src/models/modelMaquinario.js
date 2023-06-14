import { Sequelize } from "sequelize"
import db from "../../db.js"

export const Maquinario = db.define('Maquinario', {
        id: {
            type: Sequelize.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

export const findByPk = (id) => {
    return dbMaquinario.find(maquinario=> maquinario.id === id)
}

export const getMaquinarioCount = () => {
    return dbMaquinario.length 
}


export const dbMaquinario = [
    new Maquinario (0,'nome')
]