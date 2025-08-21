import Hero from '../Components/Hero/Hero.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import FeaturesSection from '../Components/SectionF/FeaturesSection.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const HomeScreens = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturesSection />
            <Footer />
        </>
        
    );
}

export default HomeScreens;
