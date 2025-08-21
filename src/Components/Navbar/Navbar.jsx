import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="8" fill="#F59E0B" />
                            <path d="M12 20h16M20 12v16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="16" cy="16" r="2" fill="white" />
                            <circle cx="24" cy="24" r="2" fill="white" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <h1>CARDAN</h1>
                        <span>Auto Repair Services</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-menu desktop-menu">
                    <a href="/" className="nav-link active">HOME</a>
                    <a href="about" className="nav-link">ABOUT</a>
                    <a href="#services" className="nav-link">SERVICES</a>
                    <a href="#contact" className="nav-link">CONTACT</a>
                </div>

                {/* Contact Button */}
                <div className="navbar-contact">
                    <MessageCircle className="contact-icon" size={20} />
                    <div className="contact-info">
                        <span className="contact-text">Talk With Our Experts</span>
                        <span className="contact-phone">(810) 920-0664</span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                <a href="#home" className="mobile-nav-link" onClick={toggleMenu}>HOME</a>
                <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>ABOUT</a>
                <a href="#services" className="mobile-nav-link" onClick={toggleMenu}>SERVICES</a>
                <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>CONTACT</a>
                <div className="mobile-contact">
                    <span className="mobile-contact-text">Talk With Our Experts</span>
                    <span className="mobile-contact-phone">(810) 920-0664</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;