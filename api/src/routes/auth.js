let express = require('express');
let router = express.Router();
const {db} = require('../database/db');


const Usuario = require('../models/models')

/* GET home page. */
router.get('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola Registro')
    });



    //REGISTRO
router.post('/register', async (req, res) => {
    const {name, lastName, userName, email, phone, password} = req.body
    console.log(name)

    await Usuario.create({
        _id: '1',
        nombre: name,
        apellidos: lastName,
        username: userName,
        email: email,
        telefono: phone,
        password: password
    })
 
    
})

module.exports = router