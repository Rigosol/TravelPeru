import React from 'react';
import Menu from '../componente/Menu'
import Banners from '../componente/banners'
import Menuitems from '../componente/Menuitems';

function salidas() {
  return (
    <div>
        <Menu />
        <Banners />
        <Menuitems />
        {/* Aquí puedes agregar más contenido si es necesario */}
    </div>
  );
}

export default salidas;