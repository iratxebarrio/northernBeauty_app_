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
    const {name, lastName, userName, email, phone, password} = req.body
    // const name = req.body.name;
    // const lastName = req.body.lastName;
    // const userName = req.body.userName;
    // const email = req.body.email;
    // const phone = req.body.phone;
    // const password = req.body.password;
    
    try {
        //  let contraseinaCifrada =  bcrypt.hashSync( password, 10 );
        // console.log('cont', contraseinaCifrada)

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

module.exports = router