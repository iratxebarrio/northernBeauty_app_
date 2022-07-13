import dataServices from "./dataServices"



const ServicesMain = () => {
    return (
        <>
            <p className="service-text">Conoce nuestros servicios</p>
            <div className="service-container">
                {dataServices.map((service) => {
                    return (
                        <div className="service-box">
                            <p>{service.title} </p>
                            <p>{service.text}</p>
                            <img src={service.img} alt="" />
                            <button>{service.boton}</button>
                        </div>
                    )
                })}
            </div>
            
        </>


    )


}

export default ServicesMain