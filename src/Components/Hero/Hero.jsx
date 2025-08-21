import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
    const images = [
        "https://raw.githubusercontent.com/Jan-Amixtlan/prueba-tecnica-frontend/refs/heads/main/src/assets/images/fondo.jpg",
        "https://raw.githubusercontent.com/Jan-Amixtlan/prueba-tecnica-frontend/refs/heads/main/src/assets/images/fondo2.jpg",
        "https://raw.githubusercontent.com/Jan-Amixtlan/prueba-tecnica-frontend/refs/heads/main/src/assets/images/fondo3.jpg"
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="hero-carousel">
            <div
                className="hero-slide"
                style={{ backgroundImage: `url(${images[current]})` }}
            >
                <div className="overlay">
                    <div className="hero-content">
                        <h1>
                            We Make Your Vehicle <br />
                            <span>In Good Shape</span>
                        </h1>
                        <p>
                            Minim veniam quis nostrud exercitation ullamco laboris nisi
                            ex sed ipsum ea reprehend deritin voluptate.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">Learn More</button>
                            <button className="btn btn-secondary">Free Estimate</button>
                        </div>
                    </div>
                </div>

                {/* Controles */}
                <button className="arrow left" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="arrow right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Hero;
