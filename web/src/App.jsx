import React from 'react';
import Menu from './componente/Menu';
import Banner from './componente/banners';
import Cuerpo from './componente/Cuerpo';
import Salidas from './pagina/Salidas';
import Fullday from './pagina/Fullday';

function App() {
  return (
    <div>
      <Menu />
      <Banner />
      <Cuerpo />
      {/* Línea horizontal antes de Salidas */}
      <hr />
      <div id="salidas">
        <Salidas />
      </div>
      {/* Línea horizontal antes de Salidas */}
      <hr />
      <div id="Fullday">
        <Fullday />
      </div>
    </div>
  );
}

export default App;


