import {dataServices} from '../../consts/consts'


const ServicesMain = () => {
    return (
        <>
            <h2  className="service-text">Servicios</h2>
            <div className="service-container">
                {dataServices.map((service, index) => {
                    return (
                        <div key={index} className="service-box">
                            <p className="service-box-title">{service.title} </p>
                            <p className="service-box-text">{service.text}</p>
                            <div className="service-box-imgBut">
                            <img className="service-box-img" src={service.img} alt="" />
                            <button className="service-box-button">{service.boton}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </>


    )


}

export default ServicesMain