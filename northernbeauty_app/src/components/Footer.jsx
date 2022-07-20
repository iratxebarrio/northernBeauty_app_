import {Link} from 'react-scroll'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p className="footer-text">© 2022 | Creado por Iratxe Barrio Leiva | Trabajo final DAW</p>
                <div className="footer-img-container">
                    <img src="/Images/facebook.png" />
                    <img src="/Images/icons8-twitter-50.png" />
                    <img src="/Images/instagram.png" />
                </div>
                <Link activeClass="active" smooth spy to="header" >
                <div className="botonSubirContainer">
                    <p className="botonSubir">^</p>
                </div>
                </Link>
           
            </div>
        </>
    )
}

export default Footer