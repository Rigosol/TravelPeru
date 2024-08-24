import React from 'react';
import Menu from './componente/Menu'
import Banners from './componente/banners'
import Smenu from './componente/Smenu';

function salidas() {
  return (
    <div>
        <Menu />
        <Banners />
        <Smenu />
        {/* Aquí puedes agregar más contenido si es necesario */}
    </div>
  );
}

export default salidas;