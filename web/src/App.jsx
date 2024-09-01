import React from 'react';
import Menu from './componente/Menu';
import Banner from './componente/banners';
import Cuerpo from './componente/Cuerpo';
import Salidas from './pagina/Salidas';
import Fullday from './pagina/Fullday';
import Registro from './componente/Registro';
import Contactos from './componente/Contactos';
import fondo from './componente/image/contac_fondo.jpg';

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
      <div id="Contactos">
        <br/><br/><br/><br/><br/><br/>
        <h1 id="title-glb">CANALES DE ATENCIÓN</h1>
        <img id="fondo_leve" src={fondo} alt="" />
        <Registro />
        <Contactos />
      </div>
    </div>
  );
}

export default App;


