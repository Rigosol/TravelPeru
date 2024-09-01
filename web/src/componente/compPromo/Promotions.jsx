import React from 'react';
import PromoCard from '../compPromo/PromoCard';
import huacachina from '../IMAGENES/huacachina.jpg';
import machup from '../IMAGENES/machup.jpg';
import titicaca from '../IMAGENES/titicaca.jpg';
import colca from '../IMAGENES/colca.jpg';
import castillo from '../IMAGENES/castillo.jpg';
import manu from '../IMAGENES/manu.jpg';
import '../assets/cssP/EstiloPromo.css';

function Promotions() {
    const promos = [
        {
            image: huacachina,
            title: "Huacachina",
            description: "Disfruta del sol en la playa de Paracas y el INCREÍBLE Oasis del Desierto de Huacachina en solo 1 día en esta promo solo para parejas",
            details: ["🏞️ Perú", "1 día", "2 personas"],
            rating: "4.7 (300)",
            price: "$180"
        },
        {
            image: machup,
            title: "Machu Picchu",
            description: "Una experiencia única para parejas en el mágico Machu Picchu. Incluye transporte y almuerzo.",
            details: ["🏞️ Perú", "3 días", "2 personas"],
            rating: "4.8 (500)",
            price: "$250"
        },
        {
            image: titicaca,
            title: "Lago Titicaca",
            description: "Vive una aventura única en el Lago Titicaca junto a tu familia. Paseo en bote y almuerzo tradicional.",
            details: ["🏞️ Perú", "1 día", "4 personas"],
            rating: "4.6 (150)",
            price: "$120"
        },
        {
            image: colca,
            title: "Cañón del Colca",
            description: "Explora el impresionante Cañón del Colca con una excursión guiada. Aventura asegurada.",
            details: ["🏞️ Perú", "2 días", "3 personas"],
            rating: "4.7 (230)",
            price: "$200"
        },
        {
            image: castillo,
            title: "Castillo de Chancay",
            description: "Adéntrate en sumérgete en la rica historia del castillo más grande y fascinante de nuestro país.",
            details: ["🏞️ Perú", "2 días", "4 personas"],
            rating: "4.9 (400)",
            price: "S/.420"
        },
        {
            image: manu,
            title: "Parque Nacional del Manu",
            description: "Descubre la increible biodiversidad, de nuestro patrimonio cultural, con guía y comida incluídos",
            details: ["🏞️ Perú", "1 día", "2 personas"],
            rating: "4.5 (200)",
            price: "S/.530"
        }
    ];

    return (
        <section className="promotions">
            <h2 className="section-title">Promociones de Viajes en Perú</h2>
            <div className="promo-grid">
                {promos.map((promo, index) => (
                    <PromoCard key={index} {...promo} />
                ))}
            </div>
        </section>
    );
}

export default Promotions;