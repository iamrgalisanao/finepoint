import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const values = [
        {
            title: "Our mission",
            heading: "Lastly, custom building will get you more for your money. With custom homes.",
            description: "You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?q=80&w=2000&auto=format&fit=crop", // Construction site visual
        },
        {
            title: "Our vision",
            heading: "Pioneering Sustainable Urban Transformation for the next generation.",
            description: "We envision a future where infrastructure and environment coexist in perfect harmony, powered by technological innovation and environmental stewardship through advanced engineering.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop", // Modern skyscraper architectural
        },
        {
            title: "Our expertise",
            heading: "Engineering Mastery for Complex Challenges and large-scale infrastructure.",
            description: "Our team combines decades of field experience with cutting-edge BIM technology to deliver infrastructure projects that define excellence and stand the test of time.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop", // High-tech engineering/BIM workspace
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
                                    <div className="accordion-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="accordion-content">
                                        <div className="text-wrapper">
                                            <h3>{item.heading}</h3>
                                            <p>{item.description}</p>
                                            <button className="read-more-btn">
                                                <span className="arrow">↗</span> READ MORE
                                            </button>
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
