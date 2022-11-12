import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-scroll'


const Header = () => {
    const usuarioLogeado = localStorage.getItem('userName')

    console.log(usuarioLogeado, 'user')
    const navigate = useNavigate()

    const cerrarSesion = () => {
        localStorage.removeItem('userName')
        window.location.reload(true);
        // return navigate('/')
        
    }
  
    return (
    <header className='header'>
        <div className='title_header'>
            <img className='logo_header' src='/Images/makeup.png' alt="" />
            <h1>Northern Beauty</h1>
        </div>
        <div className="nav_container">

        <div className="nav">
            <ul className="nav_menu">
                <li className="nav_menu_li">Inicio</li>
                <Link activeClass="active" smooth spy to="service-text" >
                <li className="nav_menu_li">
                    Servicios
                </li> 
                </Link>
                <Link activeClass="active" smooth spy to="aboutMain-title" >
                <li className="nav_menu_li">Nuestro equipo</li>
                </Link>
                <Link activeClass="active" smooth spy to="testimonials-title" >
                <li className="nav_menu_li">Testimonios</li>
                </Link>
                <Link activeClass="active" smooth spy to="contact-title" >
                <li className="nav_menu_li">Contacto</li>
                </Link>
            </ul>
        </div>
        <div className="user-container">
            {   
            usuarioLogeado 
            ?
            
            <div className='container-boton-reservas-usuario'>
                <span>{usuarioLogeado}</span>
                <button className='boton-reservas-usuario'>Reservas </button>
                <span className='span-reservas-usuario'>   |</span>
            </div> 
            :
            ''
            }
            
            {
                usuarioLogeado
                ? <button className='button-inicia-sesion' onClick={cerrarSesion}>
                    Cerrar Sesión
                </button>
                : <button onClick={() => navigate('/login')} className='button-inicia-sesion'>
                    Inicia Sesión
                </button>
            }
            <img className='user_img' src= '/Images/user.png' alt="" />
        </div>
        </div>
    </header>
    )
}

export default Header