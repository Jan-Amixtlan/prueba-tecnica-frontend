import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import AboutSection from "../Components/About/AboutSection"
import FeaturesSection from "../Components/SectionF/FeaturesSection"
import PartnersSection from "../Components/PartnersS/PartnersSection"

const AboutScreen = () => {
    return (
        <>
            <Navbar />
            <AboutSection />    
            <FeaturesSection />
            <PartnersSection /> 
            
            < Footer />
        </>
    )
}

export default AboutScreen