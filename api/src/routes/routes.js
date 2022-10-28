let express = require('express');
let router = express.Router();

const {db} = require('../database/db')

const Usuario = require('../models/models')

/* GET home page. */
router.get('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola prueba')
    });

router.post('/loginUsuario', async (req, res)=> {
  const { userName } = req.body
  console.log(userName)
// const {userName, password...} = req.body es lo mismo que const userName = req.body.userName
  await Usuario.create({
    _id: '125',
    nombre: userName
  })

//Usuario.create ---> insertas en base al model creado con sequelize

  // db.query('INSERT INTO usuarios (nombre) VALUES (?)', [userName],(err, result) => {
  //   console.log(err)
  // })
})


    


  module.exports = router;