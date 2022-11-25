let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt')

const {Usuario} = require('../models/models')

/* GET home page. */
router.get('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola Registro')
    });



    //REGISTRO
router.post('/register', async (req, res) => {
    const {name, lastName, userName, email, phone, password} = req.body;

    try {
        const newUser = await Usuario.findOne({where : {username: userName}})
        if (!newUser) {
            await Usuario.create({
                nombre: name,
                apellidos: lastName,
                username: userName,
                email: email,
                telefono: phone,
                password: password
            }
            )
            res.status(200).send({ok: true, msg: 'usuario creado'})
        } else return res.status(400).send({ok: false, msg: 'el username ya existe'});

    } catch(error) {
        throw error;
    }
})

//COMPROBAR LOGIN
router.get('/login/:username/:password', async (req, res, error) => {
    const userName = req.params.username;
    const password = req.params.password;
    try {
        const usuario = await Usuario.findAll({where : {username: userName}})
        if(!usuario.length) return res.status(401).send({ok: false, msg: 'Login incorrecto'});
        bcrypt.compare(password, usuario[0].dataValues.password, (err, result) => {
            if(result) return res.status(200).send({ok:true, userName: userName});
            else return res.status(401).send({ok: false, msg: 'Login incorrecto'});
        })
    } catch(error) {
        throw error;
    }








})








module.exports = router