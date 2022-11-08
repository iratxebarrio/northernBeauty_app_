import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const PaginaReservas = () => {
    let params = useParams()
    let id = params.id

    const [servicio, setServicio] = useState ({})

    const [date, setDate] = useState(new Date())

    const getServiceInfo = async () => {
      await fetch ('http://localhost:8000/services/service-id', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      })
      .then(res => res.json())
      .then(data => setServicio(data))
    }
    console.log(servicio, 'servicio')

    useEffect(()=>{
      //una vez se carga todo se hace el fetch, se ejecuta cada vez que se renderiza la pagina, por eso no ponemos nada entre [] porque sino solo se ejecutaria al ocurrir lo que metiesemos dentro.
      getServiceInfo();
  },[])

    return (
        <div>

         {servicio.nombre}
        </div>
    )
}

export default PaginaReservas
