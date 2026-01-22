import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const values = [
        {
            title: "Our Mission",
            heading: "Crafting a Legacy of Excellence",
            description: "At Finepoint, our mission is to redefine the landscape of modern construction through an unwavering commitment to architectural integrity and innovative engineering. We don't just build structures; we craft enduring environments that inspire progress and foster community resilience. By blending traditional craftsmanship with state-of-the-art sustainable technologies, we deliver landmark projects that exceed the highest standards of excellence.",
            points: [
                "Architectural Integrity & Precision Engineering",
                "Sustainable Innovation for Future Generations",
                "Client-First Partnership & Transparency",
                "Community-Driven Urban Development"
            ],
            image: "https://images.unsplash.com/photo-1503387762-592dea58fe21?q=80&w=2000&auto=format&fit=crop", // Elegant architectural detail
            secondaryImage: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2000&auto=format&fit=crop" // Professional planning session
        },
        {
            title: "Our Vision",
            heading: "Defining the Future of Built Environments",
            description: "We envision a world where every structure contributes to a more sustainable and connected future. Our goal is to be the global benchmark for construction excellence, pioneering new methods of building that prioritize both human experience and environmental stewardship.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
            secondaryImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Our Expertise",
            heading: "Technical Mastery Across Disciplines",
            description: "From complex civil engineering to high-end residential finishes, our multi-disciplinary team brings a wealth of specialized knowledge to every project. We leverage advanced BIM modeling and precision logistics to ensure seamless execution from concept to completion.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop",
            secondaryImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="accordion-container">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="accordion-header"
                                onClick={() => setActiveIndex(index)}
                            >
                                <h2>{item.title}</h2>
                                <div className="accordion-line"></div>
                            </div>
                            <div className="accordion-body">
                                <div className="accordion-grid">
                                    <div className={`accordion-images-wrapper ${item.secondaryImage ? 'has-secondary' : ''}`}>
                                        <div className="accordion-image main">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        {item.secondaryImage && (
                                            <div className="accordion-image secondary">
                                                <img src={item.secondaryImage} alt={`${item.title} Insight`} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="accordion-content">
                                        <div className="text-wrapper">
                                            <h3>{item.heading}</h3>
                                            <p>{item.description}</p>

                                            {item.points && (
                                                <ul className="mission-points">
                                                    {item.points.map((point, pIndex) => (
                                                        <li key={pIndex}>
                                                            <span className="checkmark">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                                </svg>
                                                            </span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {!item.points && (
                                                <button className="read-more-btn">
                                                    <span className="arrow">↗</span> READ MORE
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
