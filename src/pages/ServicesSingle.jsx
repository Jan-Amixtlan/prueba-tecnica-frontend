import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import NewsletterSubscription from '../Components/NewsLetterS/NewsletterSubscription';

const ServicesSingle = () => (
  <>
    <Navbar />
    <div style={{padding: '2rem'}}>
      <h1>Services Single</h1>
      <p>Pantalla de servicio individual.</p>
    </div>
    <NewsletterSubscription />
    <Footer />
  </>
);

export default ServicesSingle;
