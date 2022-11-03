let express = require('express');
let router = express.Router();

const {Servicio} = require('../models/models')

router.get('/view-services', async(req, res) => {
    
    try {
        const viewServices = await Servicio.findAll()
        console.log(viewServices)
        if (!viewServices) {
            res.send({msg: 'no hay ningun servicio en la base de datos'})
        }else {
            res.send(viewServices)
        }
    } catch(error) {
        throw error
    }

})



module.exports = router