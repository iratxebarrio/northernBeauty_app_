import React from "react";
import { RiCloseLine } from "react-icons/ri";

const ModalEliminarReserva = ({ setIsOpen, usuario_id, servicio_id}) => {
  

    const eliminarReserva = async () => {
        setIsOpen(false)
        return await fetch("http://localhost:8000/reservas/eliminar-reserva", {
            method: "POST",
            body: JSON.stringify({ usuario_id, servicio_id }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((response) => 
            window.location.replace('/reservas-usuario')
            );
    }
  return (
    <>
      <div className='modal-container' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modal-cabecera'>
            <h5 className='modal-titulo'>Eliminar Reserva</h5>
          </div>
          <button className='cerrar-modal' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modal-contenido'>
           ¿Quieres eliminar la reserva?
          </div>
          <div className='modal-acciones'>
            <div className='modal-container-acciones'>
              <button className='modal-eliminar-boton' onClick={eliminarReserva}>
                Eliminar
              </button>
              <button
                className='modal-cancelar-boton'
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEliminarReserva;