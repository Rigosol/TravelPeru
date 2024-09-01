import React, { useState, useEffect } from 'react';
import '../App.css';

function Banners() {
  const images = [
    '../img/BANNER1.jpg',
    '../img/BANNER2.jpg',
    '../img/BANNER3.jpg',
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

