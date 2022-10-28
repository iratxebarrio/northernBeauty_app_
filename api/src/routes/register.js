let express = require('express');
let router = express.Router();
const {db} = require('../database/db')

const Usuario = require('../models/models')

/* GET home page. */
router.get('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola Registro')
    });

module.exports = router