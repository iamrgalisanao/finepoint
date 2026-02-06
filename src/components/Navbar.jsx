import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo.png';

const Navbar = ({ onQuoteClick, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef(null);
  const location = useLocation();
  const [activeId, setActiveId] = useState('home');

  const navLinks = [
    { name: 'Home', path: '/#home', id: 'home' },
    { name: 'Who We Are', path: '/#about', id: 'about' },
    { name: 'What We Do', path: '/#capabilities', id: 'capabilities' },
    { name: 'Projects', path: '/#portfolio', id: 'portfolio' },
    { name: 'Contact Us', path: '/#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll synchronization
  useEffect(() => {
    if (location.pathname !== '/') return;

    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const updateUnderline = (target) => {
    if (target) {
      const { offsetLeft, offsetWidth } = target;
      setUnderlineStyle({
        left: offsetLeft - 2,
        width: offsetWidth + 4,
        opacity: 1
      });
    } else {
      setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
    }
  };

  const syncActiveUnderline = () => {
    if (navLinksRef.current) {
      // Prioritize activeId from observer for active state
      const activeLinkEl = Array.from(navLinksRef.current.querySelectorAll('a')).find(
        (a) => {
          const href = a.getAttribute('href');
          return href === `/#${activeId}` || (activeId === 'home' && href === '/#home');
        }
      );

      if (activeLinkEl) {
        updateUnderline(activeLinkEl);
      } else {
        setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
      }
    }
  };

  useEffect(() => {
    // Sync underline whenever activeId or location changes
    const timer = setTimeout(syncActiveUnderline, 100);
    return () => clearTimeout(timer);
  }, [activeId, location]);

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

      {/* Bottom Navigation Section */}
      <div className="nav-bottom desktop-only">
        <div className="container nav-bottom-content">
          <div className="nav-links-desktop" ref={navLinksRef} onMouseLeave={syncActiveUnderline}>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onMouseEnter={(e) => updateUnderline(e.currentTarget)}
              >
                {link.name}
              </Link>
            ))}
            <div className="nav-underline" style={underlineStyle}></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nav-links mobile-menu ${isMenuActive ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.id} to={link.path} onClick={() => setIsMenuActive(false)}>
            {link.name}
          </Link>
        ))}
        <button className="btn btn-primary nav-cta mobile-cta" onClick={() => { onQuoteClick(); setIsMenuActive(false); }}>
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
