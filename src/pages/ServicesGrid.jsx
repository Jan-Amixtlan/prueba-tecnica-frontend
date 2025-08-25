import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import NewsletterSubscription from '../Components/NewsLetterS/NewsletterSubscription.jsx';
import AllServicesBanner from '../Components/AllServicesBanner/AllServicesBanner.jsx';

const ServicesGrid = () => (
  <>
    <Navbar />
    <AllServicesBanner /> 
    <div style={{padding: '2rem'}}>
      <h1>Services Grid</h1>
      <p>Pantalla de grid de servicios.</p>
    </div>
    <NewsletterSubscription />
    <Footer />
  </>
);

export default ServicesGrid;
