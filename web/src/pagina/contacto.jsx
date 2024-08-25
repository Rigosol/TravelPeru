import React from 'react';
import '../contacto.css';

function contacto() {
  return (
    <>
        <h1 id="title-glb">CANALES DE ATENCIÓN</h1>
        <div id="ayuda_glb">
            <div className="ayuda">
            <h2 className="text_r">Nombre*</h2>
            <input
                className="input_mode"
                type="text"
                placeholder="Ingrese su nombre completo"
            />
            </div>
            <div className="ayuda">
            <h2 className="text_r">Email*</h2>
            <input
                className="input_mode"
                type="email"
                placeholder="Ingrese su correo electronico"
            />
            </div>
            <div className="ayuda">
            <h2 className="text_r">Telefono*</h2>
            <input
                className="input_mode"
                type="tel"
                placeholder="Ingrese su Telefono"
            />
            </div>
            <div className="ayuda">
            <h2 className="text_r">Consulta*</h2>
            <select className="input_mode">
                <option>¿En que le podemos ayudar?</option>
                <option>Queja</option>
                <option>Reclamacion</option>
                <option>Informacion</option>
            </select>
            </div>
            <div className="ayuda">
            <h2 className="text_r">Mensaje*</h2>
            <textarea
                className="input_mode"
                rows={4}
                cols={50}
                defaultValue={"Ingrese su mensaje"}
            />
            </div>
            <div className="ayuda">
            <h2 className="text_r">Archivo adjunto*</h2>
            <input className="input_mode" type="file" />
            </div>
            <div className="ayuda" id="ayuda-id">
            <button className="input_mode">Enviar</button>
            <button className="input_mode">Borrar</button>
            </div>
        </div>
        <div id="contacto-glb">
            <div>
            <div className="contacto-select">
                <div>
                <img src="../IMAGENES/contac_tienda.png" alt="" />
                </div>
                <div className="contac-info-2">
                <h2>Tiendas</h2>
                <h3>Asesoria presencial para tus vacaciones</h3>
                </div>
                <div>
                <a href="">Visitanos</a>
                </div>
            </div>
            <div className="contacto-select">
                <div>
                <img src="../IMAGENES/contac_web.png" alt="" />
                </div>
                <div className="contac-info-2">
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
                <img src="../IMAGENES/contac_whatsapp.png" alt="" />
                </div>
                <div className="contac-info-2">
                <h2>WhatsApp</h2>
                <h3>Cotiza, compra y planifica todo desde tu celular</h3>
                </div>
                <div>
                <a href="">Escribenos</a>
                </div>
            </div>
            <div className="contacto-select">
                <div>
                <img src="../IMAGENES/contac_contact-center.png" alt="" />
                </div>
                <div className="contac-info-2">
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
                <img src="../IMAGENES/contac_citas-virtuales.png" alt="" />
                </div>
                <div className="contac-info-2">
                <h2>Citas Virtuales</h2>
                <h3>Te asesoramos para planificar tus próximas vacaciones</h3>
                </div>
                <div>
                <a href="">Agenda tu cita</a>
                </div>
            </div>
            <div className="contacto-select">
                <div>
                <img src="../IMAGENES/contac_portal-de-ayuda.png" alt="" />
                </div>
                <div className="contac-info-2">
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

export default contacto;