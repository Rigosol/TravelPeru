import React, { useState } from 'react';
import '../assets/cssP/EstiloPromo.css';

function PromoCard({ image, title, description, details, rating, price }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="promo-card" onClick={openModal}>
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

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{title}</h2>
                        <img src={image} alt={title} className="modal-image" />
                        <p>{description}</p>
                        <ul>
                            {details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        <button className="close-modal" onClick={closeModal}>Cerrar</button>
                        <button className="reserve-button">Reservar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PromoCard;