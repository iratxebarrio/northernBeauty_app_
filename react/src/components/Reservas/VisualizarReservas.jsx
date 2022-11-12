import React, {useEffect, useState} from 'react'

const VisualizarReservas = () => {
    //Recoge username y lo guarda
    const usuarioLogeado = localStorage.getItem('userName')
 

    const [reservasCreadas, setReservasCreadas] = useState([])
    let arrayReservas = []


    const responseReservas = (response) => {
        const {ok, userReservas} = response
        if(!ok) return alert(response.msg)
        if(ok) return setReservasCreadas(userReservas)
    }

    //enviar al back petición con username para recoger las reservas de la bbdd
    const mostrarReservas = async () => {
        await fetch("http://localhost:8000/reservas/mostrar-reservas", {
          method: "POST",
          body: JSON.stringify({usuarioLogeado}),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => responseReservas(response))
      };

    // const getServiceReserved = async () => {
    //     await 
    // }

      useEffect(() => {
        //al cargar la pagina ejecuta la función mostrarReservas para hacer la petición fetch
        mostrarReservas();
      }, []);
    return (
        <div className='container_reservas_user'>
            {
                reservasCreadas.map(reserva => {
                    return (
                        <div>
                            <p></p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default VisualizarReservas
