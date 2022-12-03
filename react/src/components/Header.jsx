import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import {Link} from 'react-scroll'
import AboutMain from "./PantallaPrincipal/AboutMain";


const Header = () => {
    const usuarioLogeado = localStorage.getItem('userName')
    const navigate = useNavigate()

    const cerrarSesion = () => {
        localStorage.removeItem('userName')
        window.location.reload(true);
        // return navigate('/')
        
    }
  
    return (
    <header className='header'>
        <div className='title_header'>
            <img className='logo_header' src='/Images/makeup.png' alt="mackeup" />
            <h1>Northern Beauty</h1>
        </div>
        <div className="nav_container">

        <div className="nav">
            <ul className="nav_menu">
            <NavLink activeClass="active" smooth spy to="/" style={{textDecoration: 'none', color: 'black'}} >
                <li className="nav_menu_li">
                    Inicio
                </li> 
                </NavLink>
            <NavLink activeClass="active" smooth spy to="/" style={{textDecoration: 'none', color: 'black'}} >
                <li className="nav_menu_li">
                    Servicios
                </li> 
                </NavLink>
                <NavLink activeClass="active" smooth spy to="/" style={{textDecoration: 'none', color: 'black'}} >
                <li  className="nav_menu_li">Nuestro equipo</li>
                </NavLink>
                <NavLink activeClass="active" smooth spy to="/" style={{textDecoration: 'none', color: 'black'}} >
                <li className="nav_menu_li">Testimonios</li>
                </NavLink>
                <NavLink activeClass="active" smooth spy to="/" style={{textDecoration: 'none', color: 'black'}} >
                <li className="nav_menu_li">Contacto</li>
                </NavLink>
            </ul>
        </div>
        <div className="user-container">
            {   
            usuarioLogeado 
            ?
            
            <div className='container-boton-reservas-usuario'>
                <span className='user-logueado'>{usuarioLogeado}    </span>
                <span className='span-reservas-usuario'>      |</span>
                <button onClick={() => navigate('/reservas-usuario')} className='boton-reservas-usuario'>Reservas </button>
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
            <img className='user_img' src= '/Images/user.png' alt="user-logo" />
        </div>
        </div>
    </header>
    )
}

export default Header