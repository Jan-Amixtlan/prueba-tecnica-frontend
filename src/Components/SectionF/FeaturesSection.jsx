import React, { useState, useEffect } from 'react';
import { Wrench, Car, UserCheck, ArrowRight } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const features = [
        {
            id: 1,
            icon: <Wrench size={40} />,
            title: "Modern Equipments",
            description: "Enim venia quis nostrud exercit ullamco laboris nsut aliquip com conseq reprehenderit.",
            link: "#equipment"
        },
        {
            id: 2,
            icon: <Car size={40} />,
            title: "Trusted Workshop",
            description: "Enim venia quis nostrud exercit ullamco laboris nsut aliquip com conseq reprehenderit.",
            link: "#workshop"
        },
        {
            id: 3,
            icon: <UserCheck size={40} />,
            title: "Service Any Vehicle",
            description: "Enim venia quis nostrud exercit ullamco laboris nsut aliquip com conseq reprehenderit.",
            link: "#service"
        }
    ];

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % features.length);
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [isMobile, features.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="features-section">
            <div className="features-container">
                <div className={`features-wrapper ${isMobile ? 'mobile-carousel' : ''}`}>
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className={`feature-card ${
                                isMobile ? 
                                (index === currentSlide ? 'active-slide' : 'hidden-slide') : 
                                ''
                            }`}
                            style={isMobile ? { 
                                transform: `translateX(${(index - currentSlide) * 100}%)` 
                            } : {}}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                                <a href={feature.link} className="feature-link">
                                    READ MORE
                                    <ArrowRight size={16} className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {isMobile && (
                    <div className="carousel-indicators">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturesSection;