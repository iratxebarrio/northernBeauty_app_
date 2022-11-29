const Sequelize = require('sequelize')

const db = new Sequelize('northern_beauty', 'root', 'dawilerna', {
    host: 'localhost',
    dialect: 'mysql'
} );

const connectDB = async () => {
    try {
        await db.authenticate()
        console.log('DB conectada')
    }catch (error){
        console.log('DB no conectada')
    }
}

module.exports = {
    db, 
    connectDB
}