import {React, useEffect, useState} from 'react'
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import Header from "../Header";
registerLocale("es", es);

const ModificarReserva = () => {
  const {usuario_id, servicio_id} = useParams()
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  const navigate = useNavigate();


  const modificarReserva = async () => {
    return await fetch("http://localhost:8000/reservas/modificar-reserva", {
        method: "PUT",
        body: JSON.stringify({ usuario_id, servicio_id, startDate }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => 
        navigate('/reservas-usuario')
        );
}
    return (
      <>
      <Header/>
      <div className="reservarContainerAll">
        <div className="reserva_container">

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
        <button className="boton_reservar" onClick={modificarReserva}>
            Actualizar
          </button>
        </div>
      </div>
      </>
    )
}

export default ModificarReserva
