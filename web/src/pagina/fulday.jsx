import React from 'react';
import '../componente/Menu'
import '../componente/banners'
import '../pagina/fullday.css';
import Banner from '../componente/IMAGENES/banner 2.jpg'
import team1 from '../componente/IMAGENES/team-1.jpg'
import team2 from '../componente/IMAGENES/team-2.jpg'
import team3 from '../componente/IMAGENES/team-3.jpg'
import tes1 from '../componente/IMAGENES/testimonial-1.jpg'
import tes2 from '../componente/IMAGENES/testimonial-2.jpg'
import tes3 from '../componente/IMAGENES/testimonial-3.jpg'
import tes4 from '../componente/IMAGENES/testimonial-4.jpg'

function fulday() {

    <body>

        <header>

            <ul id="Cabeza">
                <h1>TRAVEL PERÚ</h1>
                <nav>
                    <a href="../componente/Cuerpo.jsx" class="Lista2"><li id="Lista">Inicio</li></a>
                    <a href="../pagina/salidas.jsx" class="Lista2"><li id="Lista">Salidas diarias</li></a>
                    <a href="../pagina/fulday.jsx" class="Lista2"><li id="Lista">Full day</li></a>
                    <a href="../pagina/promos.jsx" class="Lista2"><li id="Lista">Promos</li></a>
                    <a href="../pagina/Contacto.jxs" class="Lista2"><li id="Lista">Contacto</li></a>
                </nav>
            </ul>

        </header>

        <section className="banner">
            <img src={Banner} alt="Banner" />

            <div className="button-container">
                <button className="central-button">Reservar</button>
            </div>


        </section>
        <section>
            <select class="custom-select px-4" style="height: 47px;">
                <option selected>Destino</option>
                <option value="1">Montaña de 7 colores</option>
                <option value="2">Palcoyo</option>
                <option value="3">Pallay poncho</option>
                <option value="4">Laguna de Humantay</option>
                <option value="5">Aguas termales chimur</option>
                <option value="6">Laguna de Huarcapay</option>
                <option value="7">Waqrapukara</option>
                <option value="8">Valle sagrado</option>
                <option value="9">Salineras Maras</option>
            </select>
            <div class="date-selection">
                <label for="depart-date">Fecha de Inicio:</label>
                <input type="date" id="depart-date" min="">
                    <label for="return-date">Fecha de Fin:</label>
                    <input type="date" id="return-date" min="">
                    </div>

                    <button onclick="calculateDuration()">Calcular</button>

                    <div class="duration">
                        <p id="duration-result"></p>
                        <p id="price-result"></p>
                    </div>

                </section>

                <section>

                    <h1>Tours y servicios de viajes</h1>

                    <div >
                        <h5 >Guía de viaje</h5>
                        <p >Una guía turística incluirá generalmente detalles de interés para el viajero tales como números de teléfono, direcciones, precios, valoraciones de hoteles, otros tipos de alojamientos y restaurantes. Así mismo, indicará los principales medios de transporte disponibles y puntos de embarque, itinerarios, precios o forma de adquirir los billetes. También incorpora teléfonos y direcciones de ayuda o para casos de emergencia: centros sanitarios, policía, embajadas, etc. Las recomendaciones prácticas incluyen tipos de cambio de moneda, códigos telefónicos o consideraciones higiénicas.comunicarse a este número +51 001 002 003 para comunicarse con el guia de turismo.</p>
                        <section className="team1"/>
                        <img src={team1} style="width: 100px; height: 100px;" />
                    </div>

                    <div >
                        <h5 >Reserva de entrada</h5>
                        <p > La Solicitud de reserva, el cliente que desea contratar un viaje combinado realiza una "solicitud de reserva". Tras esa solicitud, la agencia detallista o, en su caso, la agencia organizadora, se compromete a realizar las gestiones oportunas para obtener la confirmación de la reserva con arreglo al número de plazas disponibles y al período para el que se ha solicitado. comunicarse a este número +51 003 004 005 para su reserva de entrada.</p>
                        <section className="team2"/>
                        <img src={team2} style="width: 100px; height: 100px;" />
                    </div>

                    <div >
                        <h5 >Reserva de Hotel</h5>
                        <p >El horario de ocupación de las habitaciones depende de las normas establecidas en cada país y por cada proveedor. Por lo general, la habitación puede ocuparse a partir de las catorce horas del día de llegada y debe desalojarse antes de las doce horas del día de salida, con independencia de la hora en que esté prevista la llegada al hotel o de la hora en que esté prevista la continuación del viaje.comunicarse a este número para la reserva de hotel .+51 006 007 008.</p>
                        <section className="team3"/>
                        <img src={team3} style="width: 100px; height: 100px;" />
                    </div>
                </section>
                <section>
                    <h1>¿Qué dicen nuestros clientes?</h1>

                    <div>

                    <section className="team3"/>
                    <img src={team3} style="width: 100px; height: 100px;" />
                            <p >Me parecio fantástico conocer mas de mi PERÚ querido, fue estupendo...
                            </p>
                            <h5 >Juan Flores</h5>
                    </div>

                    <div>
                    <section className="team3"/>
                    <img src={team3} style="width: 100px; height: 100px;" />
                            <p >Hay , yo vine para relajame y eso hize . me tome muchas fotos. me gustoooooo ....
                            </p>
                            <h5 >Susy Días</h5>
                    </div>
                    <div>
                        <img src="../IMAGENES/testimonial-3.jpg" style="width: 100px; height: 100px;" >
                            <p>La atención fue increible desde el primer momento en que viaje y llegue al hotel. y luego el guia turistico nos hablo más de lugar puede aprender más. las personas tiene un trato agradable.
                            </p>
                            <h5 >Jorge Alay</h5>
                    </div>
                    <div>
                        <img src="../IMAGENES/testimonial-4.jpg" style="width: 100px; height: 100px;" >
                            <p >Gracias a este viaje me inspiré, para lograr una nueva canción. me gusto conocer el país de PERÚ.
                            </p>
                            <h5 class="text-truncate">Pablo Alborán</h5>
                    </div>
                </section>

             
                    </div>
                    <footer>
                    <h1><span class="text-white">TRAVEL PERÚ</h1>
                    <p>Crea su cita con anticipación y disfrute muchos días de vacaciones.</p>
                    <h5 >Enlaces útiles</h5>
                    <div>
                        <ul id="Cabeza">
                            <a href="Pagina.html" class="Lista2"><li id="Lista">Inicio</li></a>
                            <a href="Salidas.html" class="Lista2"><li id="Lista">Salidas diarias</li></a>
                            <a href="fullday.html" class="Lista2"><li id="Lista">Full day</li></a>
                            <a href="promos.html" class="Lista2"><li id="Lista">Promos</li></a>
                            <a href="Contacto.html" class="Lista2"><li id="Lista">Contacto</li></a>
                        </ul>
                        <h5 class="text-white">Contacto</h5>
                        <p>Tacna-Peru</p>
                        <p>+012 345 67890</p>
                        <p>info@travelperu.com</p>
                        <h6 class="text-white" style="letter-spacing: 0px;">Hoja informativa</h6>

                        <input type="text" class="form-control border-light" style="padding: 25px;" placeholder="escriba el Email">
                            <div class="input-group-append">
                                <button class="btn btn-primary px-3">Incribirse</button>
                            </div>

                            <div >
                                <p>&copy; 2024 Perutravel. Todos los derechos reservados.</p>
                            </div>

                        </footer>
                </body>

                );
}

