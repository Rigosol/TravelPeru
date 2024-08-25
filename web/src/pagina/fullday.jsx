import React from 'react';
import '../componente/fullday.css';


const Fullday = () => {
  return (
    <>
      {/* Service Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
              servicios
            </h6>
            <h1>Tours y servicios de viajes</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-item bg-white text-center mb-2 py-5 px-4">
                <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                <h5 className="mb-2">Guía de viaje</h5>
                <p className="m-0">
                  Una guía turística incluirá generalmente detalles de interés para el viajero tales como números de teléfono, direcciones, precios, valoraciones de hoteles, otros tipos de alojamientos y restaurantes. Así mismo, indicará los principales medios de transporte disponibles y puntos de embarque, itinerarios, precios o forma de adquirir los billetes. También incorpora teléfonos y direcciones de ayuda o para casos de emergencia: centros sanitarios, policía, embajadas, etc. Las recomendaciones prácticas incluyen tipos de cambio de moneda, códigos telefónicos o consideraciones higiénicas.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-item bg-white text-center mb-2 py-5 px-4">
                <i className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                <h5 className="mb-2">Reserva de entrada</h5>
                <p className="m-0">
                  La Solicitud de reserva, el cliente que desea contratar un viaje combinado realiza una "solicitud de reserva". Tras esa solicitud, la agencia detallista o, en su caso, la agencia organizadora, se compromete a realizar las gestiones oportunas para obtener la confirmación de la reserva con arreglo al número de plazas disponibles y al período para el que se ha solicitado
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="service-item bg-white text-center mb-2 py-5 px-4">
                <i className="fa fa-2x fa-hotel mx-auto mb-4"></i>
                <h5 className="mb-2">Reserva de Hotel</h5>
                <p className="m-0">
                  El horario de ocupación de las habitaciones depende de las normas establecidas en cada país y por cada proveedor. Por lo general, la habitación puede ocuparse a partir de las catorce horas del día de llegada y debe desalojarse antes de las doce horas del día de salida, con independencia de la hora en que esté prevista la llegada al hotel o de la hora en que esté prevista la continuación del viaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>
              Testimonios
            </h6>
            <h1>¿Qué dicen nuestros clientes?</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="text-center pb-4">
              <img
                className="img-fluid mx-auto"
                src="../IMAGENES/testimonial-1.jpg"
                style={{ width: '100px', height: '100px' }}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">
                  Me parecio fantástico conocer mas de mi PERÚ querido, fue estupendo...
                </p>
                <h5 className="text-truncate">Juan Flores</h5>
                <span>Abogado</span>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid mx-auto"
                src="../IMAGENES/testimonial-2.jpg"
                style={{ width: '100px', height: '100px' }}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">
                  Hay , yo vine para relajame y eso hize . me tome muchas fotos. me gustoooooo ....
                </p>
                <h5 className="text-truncate">Susy Días</h5>
                <span>Modelo</span>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid mx-auto"
                src="../IMAGENES/testimonial-3.jpg"
                style={{ width: '100px', height: '100px' }}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">
                  La atención fue increible desde el primer momento en que viaje y llegue al hotel. y luego el guia turistico nos hablo más de lugar puede aprender más. las personas tiene un trato agradable.
                </p>
                <h5 className="text-truncate">Jorge Alay</h5>
                <span>Maestro</span>
              </div>
            </div>
            <div className="text-center">
              <img
                className="img-fluid mx-auto"
                src="../IMAGENES/testimonial-4.jpg"
                style={{ width: '100px', height: '100px' }}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">
                  Gracias a este viaje me inspiré, para lograr una nueva canción. me gusto conocer el país de PERÚ.
                </p>
                <h5 className="text-truncate">Pablo Alborán</h5>
                <span>Cantante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Fullday;