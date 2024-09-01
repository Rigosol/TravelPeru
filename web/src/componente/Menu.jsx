import React from 'react';
import { Link } from 'react-scroll'; // Importa Link de react-scroll
import '../App.css';

function Menu() {
  return (
    <header>
      <div className="logo">
        {/* <img src="/path-to-your-logo.png" alt="Peru Travel" /> {/* Asegúrate de colocar la ruta correcta de la imagen */}
        <h1 style={{ color: '#A020F0' }}>Peru<span style={{ color: '#FF8000' }}>Travel</span></h1>
      </div>
      <div className="menu-container">
        <Link to="inicio" smooth={true} duration={500} className="menu-item">Inicio</Link>
        <Link to="salidas" smooth={true} duration={500} className="menu-item">Salidas diarias</Link>
        <Link to="Fullday" smooth={true} duration={500} className="menu-item">Full day</Link>
        <Link to="../pagina/promos" className="menu-item">Promos</Link>
        <Link to="Contactos" smooth={true} duration={500} className="menu-item">Contactos</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar" />
      </div>
    </header>
  );
}

export default Menu;