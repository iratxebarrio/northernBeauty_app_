let express = require("express");
let router = express.Router();

const { Reservas, Usuario } = require("../models/models");

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

router.post("/mostrar-reservas", async (req, res) => {
  const { usuarioLogeado } = req.body;
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
router.post ('servicios-reservas', async (req, res) => {
    try {

    } catch (error) {
  throw error;
}
})

module.exports = router

