import React from 'react';
import { Wrench, Car, UserCheck, ArrowRight } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
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

    return (
        <section className="features-section">
            <div className="features-container">
                {features.map((feature) => (
                    <div key={feature.id} className="feature-card">
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
        </section>
    );
};

export default FeaturesSection;