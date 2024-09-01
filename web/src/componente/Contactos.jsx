import { Fragment, useState } from "react"
import '../componente/Contactos.css'
import citas from '../componente/image/contac_citas-virtuales.png'
import contact from '../componente/image/contac_contact-center.png'
import portal from '../componente/image/contac_portal-de-ayuda.png'
import tienda from '../componente/image/contac_tienda.png'
import web from '../componente/image/contac_web.png'
import whatsapp from '../componente/image/contac_whatsapp.png'

function Contactos() {

    //Giro
    const images = document.querySelectorAll('.giro-leve');

    images.forEach((image) => {
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'rotate(0deg)';
        });
    });

    //Zoom
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div id="contacto-glb">
                <div>
                    <div className="contacto-select">
                        <div>
                            <img
                                className="giro-leve"
                                src={tienda}
                                alt="" />
                        </div>
                        <div className="zooming-text">
                            <h2>Tiendas</h2>
                            <h3>Asesoria presencial para tus vacaciones</h3>
                        </div>
                        <div>
                            <a href="">Visitanos</a>
                        </div>
                    </div>
                    <div className="contacto-select">
                        <div>
                            <img
                                className="giro-leve"
                                src={web}
                                alt="" />
                        </div>
                        <div className="zooming-text">
                            <h2>Web</h2>
                            <h3>Reserva, cotiza y compra tu proximo viaje</h3>
                        </div>
                        <div>
                            <a href="">Compra</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="contacto-select">
                        <div>
                            <img
                                className="giro-leve"
                                src={whatsapp}
                                alt="" />
                        </div>
                        <div className="zooming-text">
                            <h2>WhatsApp</h2>
                            <h3>Cotiza, compra y planifica todo desde tu celular</h3>
                        </div>
                        <div>
                            <a href="">Escribenos</a>
                        </div>
                    </div>
                    <div className="contacto-select">
                        <div>
                            <img
                                className="giro-leve"
                                src={contact}
                                alt="" />
                        </div>
                        <div className="zooming-text">
                            <h2>Contac Center</h2>
                            <h3>Llámanos, resulve tus dudas y planifica tu viaje con nosotros</h3>
                        </div>
                        <div>
                            <a href="">(01) 123-987</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="contacto-select">
                        <div>
                            <img
                                className="giro-leve"
                                src={citas}
                                alt="" />
                        </div>
                        <div className="zooming-text">
                            <h2>Citas Virtuales</h2>
                            <h3>Te asesoramos para planificar tus próximas vacaciones</h3>
                        </div>
                        <div>
                            <a href="">Agenda tu cita</a>
                        </div>
                    </div>
                    <div className="contacto-select">
                        <div>
                            <img
                                className="giro-leve"
                                src={portal}
                                alt="" />
                        </div>
                        <div className="zooming-text">
                            <h2>Portal de ayuda</h2>
                            <h3>Solicita cambios, reembolsos o seguimiento de tu caso</h3>
                        </div>
                        <div>
                            <a href="">Ayuda</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactos;