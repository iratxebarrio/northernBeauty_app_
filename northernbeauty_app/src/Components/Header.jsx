import imgUser from '../Images/user.png'

const Header = () => {
    return (
    <header>
        <div className="nav">
            <ul className="nav_menu">
                <li className="nav_menu_li">Inicio</li>
                <li className="nav_menu_li">Servicios</li>
                <li className="nav_menu_li">Testimonios</li>
                <li className="nav_menu_li">Contacto</li>
            </ul>
        </div>
        <div className="user">
            <img className='user_img' src={imgUser} alt="" />
        </div>
    </header>
    )
}

export default Header