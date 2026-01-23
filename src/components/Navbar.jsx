import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo.png';

const Navbar = ({ onQuoteClick, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Header Section */}
      <div className="nav-top">
        <div className="container nav-top-content">
          <div className="nav-brand-group">
            <Link to="/" className="logo-container">
              <img src={logoImg} alt="Finepoint Logo" className="logo-img" />
              <div className="logo-brand-text">
                <span className="brand-main">FINEPOINT</span>
                <span className="brand-sub">PROJECTS</span>
              </div>
            </Link>
          </div>

          <div className="nav-actions-group">
            <button className="btn btn-primary nav-cta" onClick={onQuoteClick}>
              Get a Quote
            </button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            {/* Mobile Hamburger moved to top for better UI on small screens */}
            <div className={`hamburger-launcher mobile-only ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
              <div className="hamburger-icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Section - Hidden or modified on mobile */}
      <div className="nav-bottom desktop-only">
        <div className="container nav-bottom-content">
          <div className={`hamburger-launcher ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="hamburger-icon">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>

          <div className="nav-links-desktop">
            <Link to="/#home">Home</Link>
            <Link to="/#about">Who We Are</Link>
            <Link to="/#capabilities">What We Do</Link>
            <Link to="/#portfolio">Case Studies</Link>
            <Link to="/#blog">Blog & Insights</Link>
            <Link to="/#contact">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Unified Mobile Menu Drawer */}
      <div className={`nav-links mobile-menu ${isMenuActive ? 'active' : ''}`}>
        <Link to="/#home" onClick={() => setIsMenuActive(false)}>Home</Link>
        <Link to="/#about" onClick={() => setIsMenuActive(false)}>Who We Are</Link>
        <Link to="/#capabilities" onClick={() => setIsMenuActive(false)}>What We Do</Link>
        <Link to="/#portfolio" onClick={() => setIsMenuActive(false)}>Case Studies</Link>
        <Link to="/#blog" onClick={() => setIsMenuActive(false)}>Blog & Insights</Link>
        <Link to="/#contact" onClick={() => setIsMenuActive(false)}>Contact Us</Link>
        <button className="btn btn-primary nav-cta mobile-cta" onClick={() => { onQuoteClick(); setIsMenuActive(false); }}>
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
