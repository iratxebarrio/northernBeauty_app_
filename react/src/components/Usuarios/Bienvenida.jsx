import React from 'react'
import Header from '../Header'

const Bienvenida = () => {
    const saludoUserName = localStorage.getItem('userName') //recupera el valor del localStorage y lo guarda en una const para utilizarlo
return (
    <>
    <Header />
    <h1>Hola {saludoUserName}</h1>
    </>
)
}

export default Bienvenida
