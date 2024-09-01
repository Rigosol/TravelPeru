import React from 'react';
import '../assets/cssP/EstiloPromo.css';

function Modal({ show, onClose, image, title, description, details, price }) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className="modal-details">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <div className="modal-footer">
                    <span>{price}</span>
                    <button className="reserve-button">Reservar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;