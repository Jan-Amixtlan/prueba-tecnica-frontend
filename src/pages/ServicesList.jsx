
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import NewsletterSubscription from '../Components/NewsLetterS/NewsletterSubscription.jsx';
import ServicesListBanner from '../Components/ServicesListBanner/ServicesListBanner.jsx';
import AutoDiagnosticServices from '../Components/AutoDiagnosticServices/AutoDiagnosticServices.jsx';

const ServicesList = () => (
  <>
    <Navbar />
    <ServicesListBanner />
    <AutoDiagnosticServices />
    <NewsletterSubscription />
    <Footer />
  </>
);

export default ServicesList;
