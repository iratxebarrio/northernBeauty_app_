let express = require('express');
let router = express.Router();
const {db} = require('../database/db');
//  const bcrypt = require('bcrypt')

const Usuario = require('../models/models')

/* GET home page. */
router.get('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola Registro')
    });



    //REGISTRO
router.post('/register', async (req, res) => {
    const {name, lastName, userName, email, phone, password} = req.body;

    try {
        await Usuario.create({
            nombre: name,
            apellidos: lastName,
            username: userName,
            email: email,
            telefono: phone,
            password: password
        })
    } catch(error) {
        throw error;
    }
})

//COMPROBAR USUARIO REGISTRADO CON EL LOGIN

router.post('/login', async (req, res) => {
    const {userName, password} = req.body;
    const usuario = await Usuario.findAll({where : {username: userName}})
    if(usuario.length === 0) {
        console.log('Not found')
    } else {
        console.log(usuario, 'hola')
    }
})




module.exports = router