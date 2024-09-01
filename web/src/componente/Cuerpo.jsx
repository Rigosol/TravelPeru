import React from 'react';
import '../App.css';

function Cuerpo() {
return (
<div>
<section>
<div className="Producto">
<div className="gallery-item">
<img src="/src/img/image1.png" alt="Montaña 7 colores" />
<p>Montaña 7 colores</p>
</div>
<div className="gallery-item">
<img src="/src/img/image2.jpeg" alt="Palccoyo" />
<p>Palcoyo</p>
</div>
<div className="gallery-item">
<img src="/src/img/image3.jpeg" alt="Pallay poncho" />
<p>Pallay poncho</p>
</div>
</div>

<div className="Producto">
<div className="gallery-item">
<img src="/src/img/image4.jpeg" alt="Laguna de huamantay" />
<p>Laguna de huamantay</p>
</div>
<div className="gallery-item">
<img src="/src/img/image5.jpeg" alt="Aguas termales chimur" />
<p>Aguas termales chimur</p>
</div>
<div className="gallery-item">
<img src="/src/img/image6.jpeg" alt="Laguna de Huarcapay" />
<p>Laguna de Huarcapay</p>
</div>
</div>

<div className="Producto">
<div className="gallery-item">
<img src="/src/img/image7.jpeg" alt="waqrapukara" />
<p>waqrapukara</p>
</div>
<div className="gallery-item">
<img src="/src/img/image8.jpeg" alt="Valle Sagrado" />
<p>Valle Sagrado</p>
</div>
<div className="gallery-item">
<img src="src/img/image9.jpeg" alt="Salineras - Maras" />
<p>Salineras - Maras</p>
</div>
</div>
</section>

<section className="guides">
<h2>Nuestros guías</h2>
<div className="guide-card">
<img src="../IMAGENES/GUIAS/guia.jpg" alt="Pablo Aldebaran" className="imagen00" />
<div className="guide-info">
<h3>Pablo Aldebaran</h3>
<p>Lic. Turismo</p>
</div>
</div>
<div className="guide-card">
<img src="../IMAGENES/GUIAS/profesor.jpg" alt="Wilian Walas" className="imagen00" />
<div className="guide-info">
<h3>Wilian Walas</h3>
<p>Historiador</p>
</div>
</div>
<div className="guide-card">
<img src="../IMAGENES/GUIAS/medico.jpg" alt="Rosmery Palacios" className="imagen00" />
<div className="guide-info">
<h3>Rosmery Palacios</h3>
<p>Médico</p>
</div>
</div>
<div className="guide-card">
<img src="../IMAGENES/GUIAS/cordinador.jpg" alt="Andres Lujan" className="imagen00" />
<div className="guide-info">
<h3>Andres Lujan</h3>
<p>Coordinador</p>
</div>
</div>
</section>
</div>
);
}

export default Cuerpo;

