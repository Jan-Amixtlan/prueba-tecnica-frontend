import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import NewsletterSubscription from '../Components/NewsLetterS/NewsletterSubscription';
import ServiceSingleBanner from '../Components/ServiceSingleBanner/ServiceSingleBanner';

const ServicesSingle = () => (
  <>
    <Navbar />
    <ServiceSingleBanner />
    <h1>Services Single</h1>
    <NewsletterSubscription />
    <Footer />
  </>
);

export default ServicesSingle;
