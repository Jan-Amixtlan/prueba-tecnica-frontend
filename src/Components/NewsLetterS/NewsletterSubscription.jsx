import React, { useState } from 'react';
import './NewsletterSubscription.css';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar la suscripción
        console.log('Email submitted:', email);
        setEmail('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section className="newsletter-section">
            {/* Elementos decorativos de fondo */}
            <div className="background-elements">
                <div className="wave-shape"></div>
                <div className="geometric-shapes">
                    <div className="shape-container">
                        <div className="triangle-shape"></div>
                        <div className="polygon-shape"></div>
                        <div className="number-badge">1</div>
                    </div>
                </div>
            </div>

            <div className="newsletter-container">
                <div className="newsletter-content">
                    {/* Texto del newsletter */}
                    <div className="newsletter-text">
                        <h2 className="newsletter-title">Newsletter Subscription</h2>
                        <p className="newsletter-subtitle">
                            Get Latest Auto News & Updates Directly To Inbox
                        </p>
                    </div>

                    {/* Formulario de suscripción */}
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                className="email-input"
                                placeholder="Write your email..."
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <button type="submit" className="subscribe-btn">
                                SUBSCRIBE →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscription;