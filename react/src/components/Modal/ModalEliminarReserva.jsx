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
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>Dialog</h5>
          </div>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modalContent'>
            Are you sure you want to delete the item?
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='deleteBtn' onClick={eliminarReserva}>
                Delete
              </button>
              <button
                className='cancelBtn'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEliminarReserva;