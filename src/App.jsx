import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ProjectDetails from './components/ProjectDetails';
import Stats from './components/Stats';
import About from './components/About';
import Clients from './components/Clients';
import { projects } from './data/projects';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Theme application
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Initialize Scroll Reveal
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname, hash]);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Navbar onQuoteClick={openQuoteModal} theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={
          <>
            <Hero onQuoteClick={openQuoteModal} />
            <About />
            <Stats />
            <Clients />
            <Capabilities onQuoteClick={openQuoteModal} />
            <Portfolio projects={projects} />
            <Contact />
          </>
        } />
        <Route path="/portfolio/:slug" element={
          <ProjectDetails projects={projects} />
        } />
      </Routes>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}

export default App;
