
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import NewsletterSubscription from '../Components/NewsLetterS/NewsletterSubscription.jsx';

const ServicesList = () => (
  <>
    <Navbar />
    <div style={{padding: '2rem'}}>
      <h1>Services List</h1>
      <p>Pantalla de lista de servicios.</p>
    </div>
    <NewsletterSubscription />
    <Footer />
  </>
);

export default ServicesList;
