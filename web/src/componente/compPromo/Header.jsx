import React from 'react';
import '../assets/cssP/EstiloPromo.css';

function Header() {
    return (
        <header>
            <ul id="Cabeza">
                <a href="Pagina.html" className="Lista2"><li id="Lista">Inicio</li></a>
                <a href="Salidas.html" className="Lista2"><li id="Lista">Salidas diarias</li></a>
                <a href="fullday.html" className="Lista2"><li id="Lista">Full day</li></a>
                <a href="promos.html" className="Lista2"><li id="Lista">Promos</li></a>
                <a href="Contacto.html" className="Lista2"><li id="Lista">Contacto</li></a>
            </ul>
        </header>
    );
}

export default Header;