let express = require('express');
let router = express.Router();
const {db} = require('../database/db');
const bcrypt = require('bcrypt')

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


router.post('/login', async (req, res, error) => {
    const {userName, password} = req.body;
    console.log('password introducida', password)
    console.log(userName)
    try {
        const usuario = await Usuario.findAll({where : {username: userName}})
        console.log('usuariooooo', usuario)
        if(usuario.length > 0) { 
            bcrypt.compare(password, usuario[0].dataValues.password, function(err, result) {
                if(result) {
               return res.send(console.log('Contraseña correcta'));
             }
             else {
               return res.status(400).send(console.log(' Contraseña erronea'));
             }
            });
        } else {
            return res.status(400).send(console.log('Usuario no registrado'));
        } 
    } catch(error) {
        throw error;
    }




    
   
        
    
})








module.exports = router