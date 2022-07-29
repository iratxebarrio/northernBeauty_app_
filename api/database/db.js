import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
} )

//nombre bbdd, usuario, password 

export default db