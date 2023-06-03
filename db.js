import { Sequelize } from "sequelize"

const db = new Sequelize(
    "database",
    "gui",
    "54321",
    {
        dialect: "sqlite",
        storage: 'db.sqlite',
    }
)

export default db
