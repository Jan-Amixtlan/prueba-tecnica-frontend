import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('HOME');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsMenuOpen(false); // Cerrar menú móvil al hacer clic
    };

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'CONTACT', href: '#contact' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <div className="logo-icon">
                        <img src="/logo.png" alt="Logo Cardan" width="40" height="40" />
                    </div>
                    <div className="logo-text">
                        <h1>CARDAN</h1>
                        <span>Auto Repair Services</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-menu desktop-menu">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                            onClick={() => handleLinkClick(item.name)}
                        >
                            {item.name}
                        </a>
                    ))}
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
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`mobile-nav-link ${activeLink === item.name ? 'active' : ''}`}
                        onClick={() => handleLinkClick(item.name)}
                    >
                        {item.name}
                    </a>
                ))}
                <div className="mobile-contact">
                    <span className="mobile-contact-text">Talk With Our Experts</span>
                    <span className="mobile-contact-phone">(810) 920-0664</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;