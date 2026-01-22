import React from 'react';
import './Capabilities.css';
import archImg from '../assets/capabilities/arch.png';
import buildImg from '../assets/capabilities/build.png';
import houseImg from '../assets/capabilities/house.png';

const Capabilities = ({ onQuoteClick }) => {
    const services = [
        {
            title: "Strategic Pre-Construction",
            description: "Meticulous site analysis, intelligent feasibility studies, and architectural coordination ensuring every project starts on solid structural and financial ground.",
            image: archImg,
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-3" />
                    <path d="M9 9h0" />
                    <path d="M9 12h0" />
                    <path d="M9 15h0" />
                    <path d="M9 18h0" />
                </svg>
            )
        },
        {
            title: "High-Spec Commercial",
            description: "Tier-1 commercial spaces and complex infrastructure delivery using advanced 5D BIM technology and industry-leading project governance.",
            image: buildImg,
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M8 10h.01" />
                    <path d="M16 10h.01" />
                    <path d="M8 14h.01" />
                    <path d="M16 14h.01" />
                </svg>
            )
        },
        {
            title: "Residential Masterworks",
            description: "Premium high-rise and boutique residential developments that redefine coastal and urban luxury through engineering excellence.",
            image: houseImg,
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        }
    ];

    return (
        <section id="capabilities" className="section capabilities">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">OUR SERVICES</span>
                    <h2>What We Can Do</h2>
                </div>
                <div className="capabilities-grid">
                    {services.map((service, index) => (
                        <div key={index} className="capability-card reveal">
                            <div className="card-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
                            <div className="card-content">
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button className="btn-learn" onClick={onQuoteClick}>REQUEST A QUOTE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
