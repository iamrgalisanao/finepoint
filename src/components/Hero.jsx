import React from 'react';
import './Hero.css';
import govImg from '../assets/img/NBN/Photo2.jpg';
import commImg from '../assets/img/GranvilleC/img001.jpeg';
import resImg from '../assets/portfolio_all_1768919396029.png';

const Hero = ({ onQuoteClick }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <h1>Delivering Precision <span className="accent">Across Australia</span></h1>
          <p className="hero-subtitle">
            Complex infrastructure, premium residential, and high-performance commercial projects
            engineered with transparency, safety, and technical excellence.
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

          {/* Decorative elements to match screenshot */}
          <div className="stack-decorator decorator-1"></div>
          <div className="stack-decorator decorator-2"></div>

          {/* Supporting Text Block */}
          <div className="hero-info-card">
            <p>
              Finepoint Projects is an Australian construction specialist delivering technically complex builds across commercial,
              residential, and government sectors. With decades of combined leadership experience,
              ISO-aligned systems, and a hands-on delivery model, we provide end-to-end construction solutions that minimise risk,
              protect reputations, and maximise long-term asset value without compromise.
            </p>
            <div className="card-tagline">Precision delivered. Trust built. Communities strengthened.</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
