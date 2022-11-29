let express = require('express');
let router = express.Router();

const {Servicio} = require('../models/models')

router.get('/view-services', async(req, res) => {
    
    try {
        const viewServices = await Servicio.findAll()
     
        if (!viewServices) {
            res.send({msg: 'no hay ningun servicio en la base de datos'})
        }else {
            res.send(viewServices)
        }
    } catch(error) {
        throw error
    }

})

//RECIBE ID Y ENVIA EL SERVICIO CON ESE ID PARA MOSTRAR Y PODER HACER LA RESERVA
router.get('/service-id/:id', async(req, res) => {
    const id = req.params.id
    console.log('id', id)
    try {
        const viewService = await Servicio.findOne({where:{ _id : id}})
        if (!viewService) {
            res.status(400).send({msg:'error en la petición '})
        }else {
            res.send(viewService)
        }
    } catch(error) {
        throw error
    }

})


module.exports = router