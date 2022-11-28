import { React, useState, useEffect } from "react";

import { useNavigate } from "react-router";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import Header from "../Header";
registerLocale("es", es);



const PaginaReservar = () => {
  const navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  const usuarioLogeado = localStorage.getItem('userName')
  const [startDate, setStartDate] = useState(new Date());
  const [servicio, setServicio] = useState({});

  const { nombre, descripcion, precio } = servicio;

  //MOSTRAR EL SERVICIO SELECCIONADO A PARTIR DEL ID DEL PARAMS
  const getServiceInfo = async () => {
    await fetch(`http://localhost:8000/services/service-id/${id}`, {
      method: "GET",

    })
      .then((res) => res.json())
      .then((data) => setServicio(data)
      );
  };


  useEffect(() => { 
    getServiceInfo();
  }, []);

  //CREAR LA FICHA CON EL SERVICIO Y FECHA PARA HACER LA RESERVA
  const hacerReserva = async () => {
    await fetch("http://localhost:8000/reservas/crear-reserva", {
      method: "POST",
      body: JSON.stringify({ id, startDate, usuarioLogeado }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setServicio(data),
      navigate('/reservas-usuario'));
  };

  return (
    <>
        <Header/>
      <div className="reservarContainerAll">
        <div className="reserva_container">
          <h3 className="nombre_reserva">{nombre}</h3>
          <p className="descripcion_reserva">{descripcion}</p>
          <p className="precio_reserva">{precio} €.</p>
          <p className="elegirFecha_reserva">
            Elige la fecha para tu reserva:{" "}
          </p>
          <DatePicker
            className="fecha_reserva"
            locale="es"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            value={startDate}
          />
          <button className="boton_reservar" onClick={hacerReserva}>
            Reservar
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginaReservar;

//coger el username y al localStorage. luego buscar en la bbdd el username y sacar el id para la reserva
