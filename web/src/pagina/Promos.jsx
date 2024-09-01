import React from 'react';
import Header from '../componente/compPromo/Header';
import Banner from '../componente/compPromo/Banner';
import Promotions from '../componente/compPromo/Promotions';
import Footer from '../componente/compPromo/Footer';
import '../assets/cssP/EstiloPromo.css';

function App() {
    return (
        <div className="promo-container">
            <Header />
            <Banner />
            <Promotions />
            <Footer />
        </div>
    );
}

export default App;