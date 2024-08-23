import React, { useState, useEffect } from 'react';
import '../App.css';

function Banners() {
  const images = [
    'src/componente/imageLUIS/BANNER1 (1).jpg',
    'src/componente/imageLUIS/BANNER1 (2).jpg',
    'src/componente/imageLUIS/BANNER1 (3).jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt="Carousel" className="banner" />
      <div className="button-container">
        <button className="contact-button">Contáctame</button>
      </div>
    </div>
  );
}

export default Banners;

