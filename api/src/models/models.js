const {db} = require('../database/db')
const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')


const Usuario = db.define('usuarios', {
    _id: {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
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
        type: DataTypes.STRING(255),

    },

}, { timestamps: false })

Usuario.beforeCreate(async (user, options) => {
    return bcrypt.hash(user.password, 10)
   .then(password  => {
       user.password = password
   })
    });


const Servicio = db.define('servicios', {
    _id: {
        type: DataTypes.INTEGER(9),
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT(6,2),
        allowNull: false
    },
    img:{
       type: DataTypes.STRING(50),
        allowNull: true 
    }
}, { timestamps: false }) 
//quitar de la consulta createAt y updateAt

const Reservas = db.define('reservas', {
    usuario_id: {
        type: DataTypes.INTEGER(9),
        primaryKey: true
    },
    servicio_id: {
        type: DataTypes.INTEGER(9),
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE(),
    },
    estado: {
        type: DataTypes.STRING(10)
    }
},{ timestamps: false })

Reservas.hasOne(Servicio, {
    foreignKey: '_id'
})



module.exports = {Usuario, Servicio, Reservas};

//se definen los tipos de datos que se van a utilizar en la BBDD
//se pueden añadir diferentes campos, type, si es null, si es primaryKey, si se autoincrementa..