import Hero from '../Components/Hero/Hero.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import FeaturesSection from '../Components/SectionF/FeaturesSection.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import AboutSection from '../Components/About/AboutSection.jsx';
import PartnersSection from '../Components/PartnersS/PartnersSection.jsx';
import ServicesSection from '../Components/ServicesS/ServicesSection.jsx';

const HomeScreens = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturesSection />
            <AboutSection />
            <PartnersSection />
            <ServicesSection />
            <Footer />

        </>

    );
}

export default HomeScreens;
