import React from 'react';
import '../assets/css/EstiloPromo.css';

function PromoCard({ image, title, description, details, rating, price }) {
    return (
        <div className="promo-card">
            <img src={image} alt={title} />
            <div className="promo-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="promo-details">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <div className="promo-footer">
                    <span>⭐ {rating}</span>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
}

export default PromoCard;