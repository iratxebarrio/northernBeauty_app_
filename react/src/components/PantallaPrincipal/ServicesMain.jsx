import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServicesMain = () => {
  const navigate = useNavigate();
  const [service, setService] = useState([]);

  const usuarioLogeado = localStorage.getItem("userName");

  const getReservar = (id) => {
    return navigate(`/reservas/${id}`);
  };

  const getServices = async () => {
    await fetch("http://localhost:8000/services/view-services", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        let arrayServicios = [];

        arrayServicios.push(
          data.map((service) => {
            return (
              <div className="service-box">
                <p className="service-box-title">{service.nombre} </p>
                <p className="service-box-text">{service.descripcion}</p>
                <p className="service-box-text">{service.precio}</p>
                <div className="service-box-imgBut">
                  <img
                    className="service-box-img"
                    src={"/Images/service-main/" + service.img}
                    alt="img-service"
                  />

                  {usuarioLogeado ? (
                    <button
                      className="service-box-button"
                      onClick={() => getReservar(service._id)}
                    >
                      Reservar
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })
        );
        setService([...service, arrayServicios]);
      });
  };

  useEffect(() => {
    //una vez se carga todo se hace el fetch, se ejecuta cada vez que se renderiza la pagina, por eso no ponemos nada entre [] porque sino solo se ejecutaria al ocurrir lo que metiesemos dentro.
    getServices();
  }, []);

  return (
    <>
      <h2 className="service-title">Servicios</h2>
      <div className="service-container">{service}</div>;
    </>
  );
};

export default ServicesMain;
