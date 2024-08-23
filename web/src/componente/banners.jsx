import React from 'react';
import '../App.css';
import bannerImage from '../componente/imageLUIS/BANNER1 (2).jpg'; // Asegúrate de que la ruta sea correcta

function Banner() {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner" />
      <div className="button-container">
        <button className="central-button">Reservar</button>
      </div>
    </section>
  );
}

export default Banner;
