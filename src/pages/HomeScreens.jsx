import Hero from '../Components/Hero/Hero.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import FeaturesSection from '../Components/SectionF/FeaturesSection.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import AboutSection from '../Components/About/AboutSection.jsx';

const HomeScreens = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturesSection />
            <AboutSection />
            {/* Aquí puedes agregar más secciones si es necesario */}
            <Footer />
            
        </>
        
    );
}

export default HomeScreens;
