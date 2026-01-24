import React, { useState, useEffect } from 'react';
import './Clients.css';

const testimonials = [
    {
        id: 1,
        client: "Canterbury Bankstown",
        project: "Hurlstone Park Amenities",
        location: "Hurlstone Park, NSW",
        year: "2024",
        name: "Director of Infrastructure",
        text: "Finepoint Projects has been a consistent partner in our regional infrastructure rollout. Their attention to safety and community integration is unmatched in the Sydney metro region.",
        role: "Government Partner"
    },
    {
        id: 2,
        client: "Australian Government",
        project: "NBN Regional Infrastructure",
        location: "Regional Australia",
        year: "2023",
        name: "Federal Project Coordinator",
        text: "Technical excellence and disciplined project control are the hallmarks of Finepoint Projects. Their management of the NBN rollout was precise and collaborative.",
        role: "Civic Infrastructure"
    },
    {
        id: 3,
        client: "Blacktown Council",
        project: "SES Building Refurbishment",
        location: "Blacktown, NSW",
        year: "2024",
        name: "Senior Operations Manager",
        text: "The SES refurbishment was technically demanding, but Finepoint delivered with zero downtime for our critical operations. A highly professional team with a results-driven mindset.",
        role: "Government Client"
    },
    {
        id: 4,
        client: "Lendlease",
        project: "Darling Quarter Upgrades",
        location: "Sydney CBD",
        year: "2023",
        name: "Project Lead",
        text: "Finepoint's expertise in architectural metalwork and complex structural elements is a major asset to our commercial sites. They understand the coordination demands of multi-tier projects.",
        role: "Commercial Partner"
    },
    {
        id: 5,
        client: "Built.",
        project: "The Quay Haymarket",
        location: "Haymarket, NSW",
        year: "2024",
        name: "Site Supervisor",
        text: "Efficiency and safety are never compromised. Finepoint Projects consistently transforms complex design intent into built outcomes with certainty and confidence.",
        role: "Commercial Client"
    },
    {
        id: 6,
        client: "Feenix",
        project: "Industrial Complex Alpha",
        location: "Wetherill Park",
        year: "2023",
        name: "Managing Director",
        text: "A trusted construction partner that delivers on its promises. Finepoint Projects' ability to navigate high-risk environments while maintaining quality is exceptional.",
        role: "Development Partner"
    },
    {
        id: 7,
        client: "Westbourne",
        project: "High-Rise Façade Elements",
        location: "Parramatta, NSW",
        year: "2024",
        name: "Development Manager",
        text: "Reliable, transparent, and technically robust. Finepoint Projects sets the benchmark for specialist construction delivery across our large-scale residential developments.",
        role: "Residential Partner"
    },
    {
        id: 8,
        client: "Nazero",
        project: "Mixed-Use Structural Steel",
        location: "Liverpool, NSW",
        year: "2023",
        name: "Construction Director",
        text: "We value partners who lead with integrity. Finepoint Projects provides clear documentation and full visibility, enabling informed decision-making at every stage.",
        role: "Commercial Partner"
    },
    {
        id: 9,
        client: "Mackcivil",
        project: "Infrastructure Civil Interface",
        location: "Various Locations",
        year: "2024",
        name: "Civil Engineering Lead",
        text: "Great collaboration on complex civil interfaces. Their hands-on delivery model ensures that technical risks are identified and mitigated early in the project lifecycle.",
        role: "Technical Partner"
    }
];

const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [logoStartIndex, setLogoStartIndex] = useState(0);
    const [animation, setAnimation] = useState({ type: '', dir: '' }); // 'testimonial' or 'pagination'
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        const updateCount = () => {
            if (window.innerWidth <= 480) setVisibleCount(2);
            else if (window.innerWidth <= 768) setVisibleCount(3);
            else setVisibleCount(5);
        };
        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    const handleClientClick = (index) => {
        if (index === activeIndex) return;
        const dir = index > activeIndex ? 'left' : 'right';
        setAnimation({ type: 'testimonial', dir });

        setTimeout(() => {
            setActiveIndex(index);
        }, 250);

        setTimeout(() => {
            setAnimation({ type: '', dir: '' });
        }, 500);
    };

    const handleNextLogos = () => {
        if (logoStartIndex < testimonials.length - visibleCount) {
            setAnimation({ type: 'pagination', dir: 'left' });
            setTimeout(() => {
                setLogoStartIndex(prev => prev + 1);
            }, 200);
            setTimeout(() => {
                setAnimation({ type: '', dir: '' });
            }, 500);
        }
    };

    const handlePrevLogos = () => {
        if (logoStartIndex > 0) {
            setAnimation({ type: 'pagination', dir: 'right' });
            setTimeout(() => {
                setLogoStartIndex(prev => prev - 1);
            }, 200);
            setTimeout(() => {
                setAnimation({ type: '', dir: '' });
            }, 500);
        }
    };

    return (
        <section id="clients" className="clients-section section">
            {/* Floating Background Logos */}
            <div className="clients-bg-elements">
                {testimonials.map((item, index) => (
                    <div
                        key={`bg-${item.id}`}
                        className={`bg-logo-item logo-type-${index + 1}`}
                        style={{
                            top: `${[15, 25, 65, 80, 45, 10, 75, 35, 85][index]}%`,
                            left: `${[5, 75, 12, 85, 90, 45, 28, 8, 55][index]}%`,
                            animationDelay: `${index * 0.7}s`,
                            animationDuration: `${12 + (index % 4) * 4}s`
                        }}
                    >
                        {item.client}
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="clients-header reveal always-visible">
                    <span className="subtitle">Our Clients</span>
                    <h2 className="section-heading">Partners in <span className="accent">Technical Excellence</span></h2>
                    <p className="description">
                        At Finepoint Projects, we believe that transparency and precision are the foundations of every successful build.
                        We work closely with Australia’s most respected government bodies and tier-1 commercial firms to deliver
                        infrastructure that strengthens communities and defines urban landscapes.
                    </p>
                </div>

                <div className="clients-interaction-container">
                    {/* Testimonial Display Area */}
                    <div className={`testimonial-card-wrapper ${animation.type === 'testimonial' ? 'animating ' + animation.dir : ''}`}>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="quote-icon">“</div>
                                <h3 className="project-title">{testimonials[activeIndex].project}</h3>
                                <div className="project-meta-row">
                                    <span className="meta-item">📍 {testimonials[activeIndex].location}</span>
                                    <span className="meta-divider">|</span>
                                    <span className="meta-item">🗓️ {testimonials[activeIndex].year}</span>
                                </div>
                            </div>

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

                    {/* Paginated Logo Navigation */}
                    <div className="logo-nav-pagination-container">
                        <button
                            className="nav-arrow prev"
                            onClick={handlePrevLogos}
                            disabled={logoStartIndex === 0}
                            aria-label="Previous Clients"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <div className="logo-nav-viewport">
                            <div
                                className={`logo-nav-track ${animation.type === 'pagination' ? 'paginating ' + animation.dir : ''}`}
                                style={{ transform: `translateX(-${logoStartIndex * (100 / visibleCount)}%)` }}
                            >
                                {testimonials.map((item, index) => (
                                    <div key={item.id} className="logo-nav-item">
                                        <button
                                            className={`logo-nav-btn ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleClientClick(index)}
                                        >
                                            <svg className="snake-border" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <rect x="0" y="0" width="100" height="100" fill="none" vectorEffect="non-scaling-stroke" />
                                            </svg>
                                            <span className="btn-text">{item.client}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="nav-arrow next"
                            onClick={handleNextLogos}
                            disabled={logoStartIndex >= testimonials.length - visibleCount}
                            aria-label="Next Clients"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
