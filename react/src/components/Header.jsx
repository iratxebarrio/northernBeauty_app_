import {Link} from 'react-scroll'


const Header = () => {
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

            <p>Inicia Sesión</p>
            <img className='user_img' src= '/Images/user.png' alt="" />
        </div>
        </div>
    </header>
    )
}

export default Header