import React from 'react';
import '../componente/Salidas.css';
import montanaImg from '../img/montana-7-colores.jpg'; // Importa la imagen

const Salidas = () => {
  return (
    <div className="salidas-container">
      <div className="salidas-header">
        <img src={montanaImg} alt="Montaña de 7 Colores" className="header-image" />
        <div className="salidas-pricing">
          <h2>Montaña de 7 Colores Premium</h2>
          <p className="price">S/.179.00 <span>(Precio Regular)</span></p>
          <p className="price">S/.169.00 <span>(A partir de 3 personas)</span></p>
          <button className="reservar-button">Reservar Gratis</button>
        </div>
      </div>

      <div className="salidas-content">
        <div className="salidas-column">
          <h3>Puntos de abordo</h3>
          <p><strong>3:00 a.m. - 4:00 a.m.</strong> Recogida desde el Hotel.</p>
          <p><strong>Salidas Confirmadas:</strong> Lunes, Martes, Miércoles, Jueves, Viernes, Sábados y Domingos.</p>
          <p><strong>Montaña de 7 Colores:</strong> Empezaremos el día con la recogida desde el hotel en un cómodo bus turístico. Viajaremos hacia la localidad de Cusipata, donde disfrutaremos de un desayuno típico. Luego, nos dirigiremos hacia el punto de partida de la caminata. La Montaña de 7 Colores es un destino turístico impresionante ubicado en la región del Cusco. A medida que ascendemos, apreciaremos el espectacular paisaje andino, con vistas panorámicas de las montañas nevadas y la flora local.</p>
          <p><strong>Almuerzo:</strong> Disfrutaremos de un almuerzo tipo buffet al regreso.</p>
          <p><strong>Visita a la Comunidad de Vinicunca:</strong> En el camino de regreso, haremos una parada en una comunidad local para aprender sobre la cultura y tradiciones del lugar.</p>
          <p><strong>Retorno a Cusco:</strong> Llegada al centro de Cusco y fin de nuestros servicios.</p>
        </div>

        <div className="salidas-column">
          <h3>Incluye</h3>
          <ul>
            <li>Transporte turístico ida y vuelta.</li>
            <li>Desayuno continental.</li>
            <li>Guía de turismo.</li>
            <li>Pulsera de identificación para cada viajero.</li>
            <li>Caminata guiada a la Montaña de 7 Colores.</li>
            <li>Visita a la Comunidad de Vinicunca.</li>
            <li>Almuerzo buffet.</li>
            <li>Bastones de trekking.</li>
            <li>Botiquín de primeros auxilios.</li>
            <li>Fotografías en todo el recorrido.</li>
          </ul>
        </div>

        <div className="salidas-column">
          <h3>No incluye</h3>
          <ul>
            <li>Alimentación adicional.</li>
            <li>Gastos personales o extras.</li>
          </ul>
        </div>

        <div className="salidas-column">
          <h3>Precios</h3>
          <ul>
            <li>S/.179 precio regular por persona.</li>
            <li>S/.169 precio promocional a partir de 3 personas.</li>
            <li>Niños menores de 5 años no pagan.</li>
          </ul>

          <h3>Recomendaciones</h3>
          <ul>
            <li>Ropa ligera para la caminata.</li>
            <li>Zapatos de trekking.</li>
            <li>Lentes de sol.</li>
            <li>Bloqueador solar.</li>
            <li>Gorro o sombrero.</li>
            <li>Agua suficiente.</li>
          </ul>

          <h3>¿Cómo reservar?</h3>
          <p>Para confirmar su reserva se tiene que realizar el abono del 50% del total por persona, una vez hecho esto enviar sus nombres, apellidos, Nº DNI, edad y número telefónico de contacto y enviar el voucher de depósito al Whatsapp, email o Facebook.</p>
          <p><strong>BCP Cuenta de Ahorros Soles:</strong> Nº de cuenta: 1939 4362 9550 14. Nº de cuenta interbancaria: 00 211 9319 4362 9550 1416. Titular BCP: Eduardo Humberto Flores Murga.</p>
          <p><strong>Interbank Cuenta de Ahorros Soles:</strong> Nº de cuenta: 203 2119 2724 20. Nº de cuenta interbancaria: 003 200 0131 1927 2420 34. Titular Interbank: VIVE YA TRAVEL PERU E.I.R.L.</p>

          <h3>Pasos para reservar</h3>
          <ul>
            <li>Realice su reserva solo con el 50% en agentes.</li>
            <li>Adjuntar voucher y datos al Whatsapp.</li>
            <li>Recibirá SU confirmación con datos del guía y bus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Salidas;