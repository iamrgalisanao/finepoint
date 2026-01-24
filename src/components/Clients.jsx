import React, { useState, useEffect } from 'react';
import './Clients.css';

const testimonials = [
    {
        id: 1,
        client: "Canterbury Bankstown",
        name: "Director of Infrastructure",
        text: "Finepoint Projects has been a consistent partner in our regional infrastructure rollout. Their attention to safety and community integration is unmatched in the Sydney metro region.",
        role: "Government Partner"
    },
    {
        id: 2,
        client: "Australian Government",
        name: "Federal Project Coordinator",
        text: "Technical excellence and disciplined project control are the hallmarks of Finepoint Projects. Their management of the NBN rollout was precise and collaborative.",
        role: "Civic Infrastructure"
    },
    {
        id: 3,
        client: "Blacktown Council",
        name: "Senior Operations Manager",
        text: "The SES refurbishment was technically demanding, but Finepoint delivered with zero downtime for our critical operations. A highly professional team with a results-driven mindset.",
        role: "Government Client"
    },
    {
        id: 4,
        client: "Lendlease",
        name: "Project Lead",
        text: "Finepoint's expertise in architectural metalwork and complex structural elements is a major asset to our commercial sites. They understand the coordination demands of multi-tier projects.",
        role: "Commercial Partner"
    },
    {
        id: 5,
        client: "Built.",
        name: "Site Supervisor",
        text: "Efficiency and safety are never compromised. Finepoint Projects consistently transforms complex design intent into built outcomes with certainty and confidence.",
        role: "Commercial Client"
    },
    {
        id: 6,
        client: "Feenix",
        name: "Managing Director",
        text: "A trusted construction partner that delivers on its promises. Finepoint Projects' ability to navigate high-risk environments while maintaining quality is exceptional.",
        role: "Development Partner"
    },
    {
        id: 7,
        client: "Westbourne",
        name: "Development Manager",
        text: "Reliable, transparent, and technically robust. Finepoint Projects sets the benchmark for specialist construction delivery across our large-scale residential developments.",
        role: "Residential Partner"
    },
    {
        id: 8,
        client: "Nazero",
        name: "Construction Director",
        text: "We value partners who lead with integrity. Finepoint Projects provides clear documentation and full visibility, enabling informed decision-making at every stage.",
        role: "Commercial Partner"
    },
    {
        id: 9,
        client: "Mackcivil",
        name: "Civil Engineering Lead",
        text: "Great collaboration on complex civil interfaces. Their hands-on delivery model ensures that technical risks are identified and mitigated early in the project lifecycle.",
        role: "Technical Partner"
    }
];

const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClientClick = (index) => {
        if (index === activeIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 400);
    };

    return (
        <section id="clients" className="clients-section section">
            <div className="container">
                <div className="clients-header reveal">
                    <span className="subtitle">Client Success</span>
                    <h2 className="section-heading">Built on <span className="accent">Trust & Performance</span></h2>
                    <p className="description">
                        We collaborate with Australia’s leading government and commercial organizations to deliver landmark projects with technical excellence.
                    </p>
                </div>

                <div className="clients-interaction-container">
                    {/* Testimonial Display Area */}
                    <div className={`testimonial-card-wrapper ${isAnimating ? 'animating' : ''}`}>
                        <div className="testimonial-card">
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">
                                {testimonials[activeIndex].text}
                            </p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <span className="author-name">{testimonials[activeIndex].name}</span>
                                    <span className="author-role">{testimonials[activeIndex].role}</span>
                                </div>
                                <div className="client-badge">
                                    {testimonials[activeIndex].client}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo Navigation Bar */}
                    <div className="logo-nav-outer">
                        <div className="logo-nav-inner">
                            {testimonials.map((item, index) => (
                                <button
                                    key={item.id}
                                    className={`logo-nav-btn ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleClientClick(index)}
                                >
                                    <svg className="snake-border" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <rect x="0" y="0" width="100" height="100" fill="none" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                    <span className="btn-text">{item.client}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
