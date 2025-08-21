import React from 'react';
import { Play, CheckCircle, BarChart3 } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
    const features = [
        'Top rated excellent reviews from customers',
        'We provide new offers & promotions',
        'Expert tecnicians always at service for vehicles',
        'Get our lifetime guarantee service works',
        'Offering 1500+ services locations around USA'
    ];

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-content">

                    {/* Left Side - Images */}
                    <div className="about-images">
                        <div className="main-image">
                            {/* Placeholder para imagen principal */}
                            <div className="image-placeholder main-placeholder">
                                <span>Main Image (680x400px)</span>
                            </div>
                            <button className="play-button">
                                <Play size={24} fill="white" />
                            </button>
                        </div>

                        <div className="secondary-images">
                            <div className="stats-card">
                                <BarChart3 className="stats-icon" size={32} />
                                <div className="stats-number">27</div>
                                <div className="stats-text">
                                    <span className="years">Years of</span>
                                    <span className="experience">Experience</span>
                                </div>
                                <div className="industry-text">Industry Business</div>
                            </div>

                            <div className="small-images">
                                <div className="image-placeholder small-placeholder">
                                    <span>Image 1 (200x150px)</span>
                                </div>
                                <div className="image-placeholder small-placeholder">
                                    <span>Image 2 (200x150px)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="about-text">
                        <div className="section-header">
                            <span className="section-subtitle">About Cardan Repair Services</span>
                            <h2 className="section-title">
                                We're Committed To <span className="highlight">AutoRepair</span><br />
                                Meets The Quality Standards
                            </h2>
                            <div className="title-divider"></div>
                        </div>

                        <p className="section-description">
                            Kiusmod tempor incididunt ut labore sed dolore magnas aliquay enim ad
                            minim veniam quis nostrud exercitation ullamco laboris nisut aliquip ex sed
                            ipsum ea reprehen deritin voluptate.
                        </p>

                        <div className="features-list">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <CheckCircle className="check-icon" size={20} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;