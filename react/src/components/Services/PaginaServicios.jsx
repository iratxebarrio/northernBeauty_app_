import {React,useEffect} from 'react';


const PaginaServicios = () => {


    const getServices = () => {
        fetch('http://localhost:8000/services/view-services', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(res => console.log(res, 'respuesta'))
    }

    useEffect(()=>{
        //una vez se carga todo se hace el fetch, se ejecuta cada vez que se renderiza la pagina, por eso no ponemos nada entre [] porque sino solo se ejecutaria al ocurrir lo que metiesemos dentro.
        getServices();
    },[])

    return (
        <div>
            <h1>Hola mundo</h1>
        </div>
    )
}

export default PaginaServicios
