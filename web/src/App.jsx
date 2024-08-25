import React from 'react';
import Menu from './componente/Menu';
import Banner from './componente/banners';
import Cuerpo from './componente/Cuerpo';
import Salidas from './pagina/Salidas';

function App() {
  return (
    <div>
      <Menu />
      <Banner />
      <Cuerpo />
      <Salidas />

    </div>
  );
}

export default App;