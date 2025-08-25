import React, { useState } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const services = [
        {
            id: 1,
            icon: "car-service",
            title: "Reliable & Fast Service",
            description: "Magna sed alique umt derit enimd mini venia"
        },
        {
            id: 2,
            icon: "repair-tools",
            title: "Right-Way Repairing",
            description: "Derit magna alique umts enimd mini dolor sed"
        },
        {
            id: 3,
            icon: "specialists",
            title: "Leading Auto Specialists",
            description: "Magna alique sed umt enimd dolor min venia"
        }
    ];

    const handleVideoPlay = () => {
        setIsVideoPlaying(!isVideoPlaying);
        // Aquí puedes agregar la lógica para reproducir el video
        console.log('Video play clicked');
    };

    const renderIcon = (iconType) => {
        switch (iconType) {
            case 'car-service':
                return (
                    <div className="icon-wrapper">
                        <div className="car-icon">
                            <div className="car-body"></div>
                            <div className="car-wheels">
                                <div className="wheel"></div>
                                <div className="wheel"></div>
                            </div>
                            <div className="wrench-icon"></div>
                        </div>
                    </div>
                );
            case 'repair-tools':
                return (
                    <div className="icon-wrapper">
                        <div className="tools-icon">
                            <div className="hammer"></div>
                            <div className="screwdriver"></div>
                        </div>
                    </div>
                );
            case 'specialists':
                return (
                    <div className="icon-wrapper">
                        <div className="specialist-tools">
                            <div className="tool-set">
                                <div className="tool"></div>
                                <div className="tool"></div>
                                <div className="tool"></div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="why-choose-section">
            <div className="container">
                <div className="content-wrapper">
                    {/* Contenido de texto */}
                    <div className="text-content">
                        <div className="header-content">
                            <p className="subtitle">Why Choose Cardan Repair Services</p>
                            <h2 className="main-title">
                                Master Technicians With<br />
                                Extensive Knowledge
                            </h2>
                            <div className="decorative-line"></div>
                        </div>

                        <p className="description">
                            Tempor incididunt labor sed dolore umt magna sed aliquay enim ad dolor minim
                            veniam quis nostrud exercitation ullamco laboris ex sed ipsum ea reprehen deritn
                            voluptate.
                        </p>

                        {/* Lista de servicios */}
                        <div className="services-list">
                            {services.map((service) => (
                                <div key={service.id} className="service-item">
                                    <div className="service-icon">
                                        {renderIcon(service.icon)}
                                    </div>
                                    <div className="service-content">
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-description">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contenido visual */}
                    <div className="visual-content">
                        <div className="image-container">
                            <img
                                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&h=600&fit=crop"
                                alt="Professional mechanic smiling"
                                className="mechanic-image"
                            />
                            <button
                                className="play-button"
                                onClick={handleVideoPlay}
                                aria-label="Play video"
                            >
                                <div className="play-icon">▶</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;