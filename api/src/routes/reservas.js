let express = require("express");
let router = express.Router();
const sequelize = require('sequelize')

const { Reservas, Usuario, Servicio } = require("../models/models");

//CREAR RESERVAS A PARTIR DEL ID DEL SERVICIO Y DEL ID DEL USUARIO
router.post("/crear-reserva", async (req, res) => {
  const { id, startDate, usuarioLogeado } = req.body;

  try {
    const usuario = await Usuario.findAll({
      where: { username: usuarioLogeado },
    });
    if (usuario) {
      idUser = usuario[0].dataValues._id;
    }

    await Reservas.create({
      usuario_id: idUser,
      servicio_id: id,
      fecha: startDate,
      estado: "activa",
    });
  } catch (error) {
    throw error;
  }
});

//MOSTRAR RESERVAS SEGUN EL USERNAME GUARDADO EN LOCALSTORAGE

router.get("/mostrar-reservas/:username", async (req, res) => {
  const  usuarioLogeado = req.params.username;
  let idUser = "";
  try {
    const usuario = await Usuario.findAll({
      where: { username: usuarioLogeado },
    });

    if (usuario) {
      idUser = usuario[0].dataValues._id;
      const userReservas = await Reservas.findAll({
        where: { usuario_id: idUser },
      });
      if(userReservas.length > 0){
          res.send({ ok: true, userReservas });
      }
      else {
         res.send({ ok: false, msg: "No hay reservas con tu nombre" });
      }
    } 
  } catch (error) {
    throw error;
  }
});

//EXTRAER NOMBRE Y DESCRIPCIÓN DE SERVICIOS RESERVADOS PARA MOSTRAR  EN VisualizarReservas.jsx
router.get ("/servicios-reservas/:username", async (req, res) => {
  const usuarioLogeado = req.params.username
  try {

    const usuario = await Usuario.findOne({
      where: { username: usuarioLogeado },
      raw: true
    });
    const reservas = await Reservas.findAll({
      where: {usuario_id: usuario._id},
      raw: true
    })

    let arrayReservas = []
    for (const reserva of reservas) {
      const servicioReservado = await Servicio.findOne({
        where: {
          _id: reserva.servicio_id
        },
        raw: true
      })
      arrayReservas.push({ reserva, servicioReservado })
    }
  
 
    res.send(arrayReservas) 
    } catch (error) {
  throw error;
}
})


//ELIMINAR RESERVA
router.delete('/eliminar-reserva', async(req, res) => {
  const  {usuario_id, servicio_id} = req.body

  try {
    await Reservas.destroy({where: {
      usuario_id: usuario_id,
      servicio_id: servicio_id
    }})

    res.send({msg: 'Reserva eliminada correctamente.'})

  }catch (error) {
  throw error;
}

})
 

//MODIFICAR RESERVA
router.put('/modificar-reserva', async(req, res) => {
  const  {usuario_id, servicio_id, startDate} = req.body
  
  try {

    await Reservas.update({
      fecha: startDate,
      estado: 'actualizado'
    },{
      where: {
        usuario_id: usuario_id,
        servicio_id: servicio_id
      }}
    )

    res.send({msg: 'Reserva actualizada correctamente.'})

  }catch (error) {
    //con un console.log(error) podemos saber detalladamente el error y asi solucionarlo.
  throw error;
}

})

module.exports = router

