

const Sequelize = require('sequelize')

db = new Sequelize('northern_beauty', 'root', 'dawilerna', {
    host: 'localhost',
    dialect: 'mysql'
} );

//nombre bbdd, usuario, password
exports.db = db