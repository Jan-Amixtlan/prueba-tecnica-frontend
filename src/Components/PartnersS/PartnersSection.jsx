import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
    const partners = [
        {
            id: 1,
            name: "Partner 1",
            placeholder: "Logo 1 (200x100px)"
        },
        {
            id: 2,
            name: "Partner 2",
            placeholder: "Logo 2 (200x100px)"
        },
        {
            id: 3,
            name: "Partner 3",
            placeholder: "Logo 3 (200x100px)"
        },
        {
            id: 4,
            name: "Partner 4",
            placeholder: "Logo 4 (200x100px)"
        },
        {
            id: 5,
            name: "Partner 5",
            placeholder: "Logo 5 (200x100px)"
        }
    ];

    return (
        <section className="partners-section">
            <div className="partners-container">
                <div className="partners-header">
                    <h2 className="partners-title">
                        TRUSTED BY OUR MILLIONS OF SATISFIED PARTNERS
                    </h2>
                </div>

                <div className="partners-grid">
                    {partners.map((partner) => (
                        <div key={partner.id} className="partner-item">
                            <div className="partner-logo">
                                <span className="logo-placeholder">{partner.placeholder}</span>
                                <div className="placeholder-icon">🏢</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;