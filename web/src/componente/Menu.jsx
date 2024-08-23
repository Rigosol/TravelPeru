import React from 'react';
import '../App.css';

function Menu() {
  return (
    <header>
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Peru Travel" /> {/* AsegÃšrate de colocar la ruta correcta de la imagen */}
        <h1 style={{ color: '#A020F0' }}>Peru <span style={{ color: '#FF8000' }}>Travel</span></h1>
      </div>
      <div className="menu-container">
        <a href="#" className="menu-item">Inicio</a>
        <a href="#" className="menu-item">Salidas diarias</a>
        <a href="#" className="menu-item">Full day</a>
        <a href="#" className="menu-item">Promos</a>
        <a href="#" className="menu-item">Contacto</a>
      </div>
      <div className="search-bar">
      t  <input type="text" placeholder="Buscar" />
      </div>
    </header>
  );
}

export default Menu;