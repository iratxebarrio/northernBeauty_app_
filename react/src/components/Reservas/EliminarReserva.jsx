import React from 'react'
import { useParams } from "react-router";


const EliminarReserva = () => {
   let {usuario_id, servicio_id} = useParams()
  
    console.log(usuario_id)
    console.log(servicio_id)
    return (
        <div>
            <h1>jdjdjd</h1>
        </div>
    )
}

export default EliminarReserva
