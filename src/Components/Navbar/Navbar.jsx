import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('HOME');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (linkName, event) => {
        setActiveLink(linkName);
        setIsMenuOpen(false); // Cerrar menú móvil al hacer clic

        // Prevenir la navegación real para mantener el estado
        event.preventDefault();

        // Simular navegación sin recargar la página
        window.history.pushState({}, '', linkName.toLowerCase() === 'home' ? '/' : `#${linkName.toLowerCase()}`);
    };

    // Detectar la pestaña activa basada en la URL al cargar
    useEffect(() => {
        const path = window.location.pathname + window.location.hash;
        if (path === '/' || path === '') {
            setActiveLink('HOME');
        } else if (path.includes('about')) {
            setActiveLink('ABOUT');
        } else if (path.includes('services')) {
            setActiveLink('SERVICES');
        } else if (path.includes('contact')) {
            setActiveLink('CONTACT');
        }
    }, []);

    const navItems = [
        { name: 'HOME', href: '#/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'CONTACT', href: '#contact' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src="/public/logo.png" alt="Logo" className="logo-img" style={{ width: '150px', height: '60px' }} />
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-menu desktop-menu">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                            onClick={(e) => handleLinkClick(item.name, e)}
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
                        onClick={(e) => handleLinkClick(item.name, e)}
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