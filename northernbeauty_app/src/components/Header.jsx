

const Header = () => {
    return (
    <header>
        <div className='title_header'>
            <img className='logo_header' src='/Images/makeup.png' alt="" />
            <h1>Northern Beauty</h1>
        </div>
        <div className="nav_container">

        <div className="nav">
            <ul className="nav_menu">
                <li className="nav_menu_li">Inicio</li>
                <li className="nav_menu_li">Servicios</li>
                <li className="nav_menu_li">Nuestro equipo</li>
                <li className="nav_menu_li">Testimonios</li>
                <li className="nav_menu_li">Contacto</li>
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