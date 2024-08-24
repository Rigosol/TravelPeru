import React from 'react';
import Menu from './componente/Menu'
import banners from './componente/banners'
import Smenu from './componente/Smenu';

function salidas() {
  return (
    <div>
        <Menu />
        <banners />
        <Smenu />
        {/* Aquí puedes agregar más contenido si es necesario */}
    </div>
  );
}

export default salidas;