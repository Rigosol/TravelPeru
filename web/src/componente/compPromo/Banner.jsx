import React from 'react';
import banner2 from '../IMAGENES/bannerP';
import '../assets/cssP/EstiloPromo.css';

function Banner() {
    return (
        <section className="banner">
            <img src={banner2} alt="Banner" />
        </section>
    );
}

export default Banner;