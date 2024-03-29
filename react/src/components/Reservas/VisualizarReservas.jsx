import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import ModalEliminarReserva from "../Modal/ModalEliminarReserva";
import Header from '../Header'

const VisualizarReservas = () => {
  //Recoge username y lo guarda
  const usuarioLogeado = localStorage.getItem("userName");
  const navigate = useNavigate();
 

  const [isOpen, setIsOpen] = useState(false);
  const [usuarioId, setUsuarioId] = useState('')
  const [servicioId, setServicioId] = useState('')

  const [data, setData] = useState([])

  
  

  //enviar al back petición con username para recoger las reservas de la bbdd
  const mostrarReservas = async () => {
    return await fetch(`http://localhost:8000/reservas/mostrar-reservas/${usuarioLogeado}`, {
      method: "GET",

    })
      .then((res) => res.json())
      .then((response) => response);
  };

  //enviar al back reservasCreadas para traer con el servicio_id la información de los servicios solicitados.
  const getServiceReserved = async (reservasCreadas) => {
    return await fetch(`http://localhost:8000/reservas/servicios-reservas/${usuarioLogeado}`, {
      method: "GET",
    })
      .then((res) => res.json())
      // .then((response) => responseReservas(response))
      .then((response) => response)
      .catch((e) => console.log(e));

    //catch hay que poner siempre que haya then
    //catch entra cuando hay error de API o BBDD
  };

  const eliminarReserva = (usuarioId, servicioId) => {
    setServicioId(servicioId)
    setUsuarioId(usuarioId)
    setIsOpen(true)
  }
  useEffect(() => {
    //Ejecuta la funcion mostrarReservas
    //ejecuta el then (significa que lo hace despues xq es asincrono)
    //.then espera a que mostrarReservas se ejecute y tenga respuesta
    //se ejectura getServiceReserved y al tener la respuesta se ejecuta el then que dentro se pone data patata o lo que sea y es la respuesta de getServiceReserved
    mostrarReservas().then(({ ok, userReservas, msg }) => {
      if (!ok) return alert(msg);
      getServiceReserved(userReservas).then((infoReservas) => {
        setData(infoReservas)
      });
    });
  }, [isOpen]);
 

  return (
    <>
    <Header />
      <h2>Reservas</h2>
      <div className="reservas-creadas-container">{          
      data.map((reserva) => {
            return (
              <>
                <div className="reserva-card">
                  <h3>{reserva.servicioReservado.nombre}</h3>
                  <p> Precio: {reserva.servicioReservado.precio} €</p>
                  <p> Fecha: {reserva.reserva.fecha}</p>
                  <p> Estado: {reserva.reserva.estado}</p>
                  <img
                    src={
                      "/Images/service-main/" + reserva.servicioReservado.img
                    }
                    alt="service"
                  />
                  <div>
                  <button
                      onClick={() =>
                        navigate(
                          `/modificar-reserva/${reserva.reserva.usuario_id}/${reserva.reserva.servicio_id}`
                        )
                      }
                    >
                      Modificar reserva
                    </button> 

                    <button
                     
                      onClick={() => eliminarReserva(reserva.reserva.usuario_id,reserva.reserva.servicio_id )}
                    >
                      Eliminar Reserva
                    </button>
                  </div>
                </div>
              </>
            );
          })}</div>
      {isOpen && <ModalEliminarReserva setIsOpen={setIsOpen} usuario_id={usuarioId} servicio_id={servicioId}  />}
    </>
  );
};

export default VisualizarReservas;
