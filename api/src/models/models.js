const {db} = require('../database/db')
const {DataTypes} = require('sequelize')


const Usuario = db.define('usuarios', {
    _id: {
        type: DataTypes.STRING(9),
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER(9),
        allowNull: false

    },
    password: {
        type: DataTypes.STRING(50),

    }, 
    
}, { timestamps: false })



module.exports = Usuario;

//se definen los tipos de datos que se van a utilizar en la BBDD
//se pueden añadir diferentes campos, type, si es null, si es primaryKey, si se autoincrementa..