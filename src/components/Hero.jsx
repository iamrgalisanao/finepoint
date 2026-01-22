import React from 'react';
import './Hero.css';
import govImg from '../assets/government/government_project_sample_1768918380000.png';
import commImg from '../assets/commercial/commercial_project_sample_1768918445563.png';
import resImg from '../assets/portfolio_all_1768919396029.png';

const Hero = ({ onQuoteClick }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <h1>Engineering the <span className="accent">Future</span></h1>
          <p className="hero-subtitle">
            Three decades of technical mastery in high-stakes infrastructure,
            luxury residential developments, and premium commercial spaces
            architected for the Australian landscape.
          </p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn btn-primary">Our Portfolio</a>
            <button className="btn btn-outline" onClick={onQuoteClick}>Partner With Us</button>
          </div>
        </div>

        <div className="hero-image-stack reveal">
          <div className="stack-item item-main">
            <img src={govImg} alt="Main project" />
          </div>
          <div className="stack-item item-secondary">
            <img src={commImg} alt="Secondary project" />
          </div>
          <div className="stack-item item-tertiary">
            <img src={resImg} alt="Tertiary project" />
          </div>

          {/* Decorative elements to match screenshot */}
          <div className="stack-decorator decorator-1"></div>
          <div className="stack-decorator decorator-2"></div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
