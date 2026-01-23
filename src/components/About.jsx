import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const values = [
        {
            title: "Our Mission",
            tagline: "Precision delivered. Trust built. Communities strengthened.",
            heading: "Delivering Built Confidence",
            description: (
                <>
                    <p>At Finepoint Projects, our mission is to deliver high-value construction solutions that balance technical excellence, safety, and long-term performance. We specialise in complex commercial, residential, and government projects—executed with transparency, disciplined project control, and a commitment to quality at every stage.</p>
                    <p style={{ marginTop: '1.5rem' }}>We don’t simply construct assets; we create resilient, functional environments that support communities, protect client reputations, and stand the test of time. Through strong leadership, proven systems, and collaborative delivery, we consistently transform design intent into built outcomes with certainty and confidence.</p>
                </>
            ),
            points: [
                {
                    title: "Architectural Integrity & Precision Engineering",
                    desc: "Delivering technically robust builds that align with design intent, compliance requirements, and real-world constructability."
                },
                {
                    title: "Safety, Quality & Environmental Responsibility",
                    desc: "Operating under ISO-aligned HSEQ frameworks to protect people, assets, and the environment across every project."
                },
                {
                    title: "Client-First Partnership & Transparency",
                    desc: "Providing clear documentation, proactive communication, and full visibility—enabling informed decision-making and reduced project risk."
                },
                {
                    title: "Community-Focused Infrastructure & Development",
                    desc: "Creating public, civic, and private spaces that enhance usability, accessibility, and long-term community value."
                }
            ],
            image: "/img/Photo8.jpg",
            secondaryImage: "/img/Photo5.jpg"
        },
        {
            title: "Our Vision",
            tagline: "To lead with integrity, build with precision, and deliver lasting value through trusted construction partnerships.",
            heading: "Setting the Standard for Trusted Construction Delivery",
            reversed: true,
            description: (
                <>
                    <p>Our vision is to be a trusted construction partner recognised for delivering complex, high-impact projects with certainty, integrity, and technical excellence. We aspire to set the benchmark for specialist construction delivery across Australia—where quality, safety, and transparency are embedded in every outcome.</p>
                    <p style={{ marginTop: '1.5rem' }}>Through disciplined systems, experienced leadership, and collaborative delivery, Finepoint Projects aims to shape resilient built environments that serve communities, support economic growth, and endure for generations. We envision a future where construction excellence is defined not by scale alone, but by precision, accountability, and long-term value.</p>
                </>
            ),
            points: [
                {
                    title: "Leadership in Complex & High-Risk Construction",
                    desc: "Becoming the specialist contractor of choice for technically demanding commercial, residential, and government projects."
                },
                {
                    title: "Enduring Quality & Asset Longevity",
                    desc: "Delivering structures and infrastructure designed for durability, performance, and whole-of-life value."
                },
                {
                    title: "Safety, Sustainability & Responsible Growth",
                    desc: "Advancing safe, environmentally responsible construction practices that protect people, places, and future generations."
                },
                {
                    title: "Partnership-Driven Industry Impact",
                    desc: "Building long-term relationships founded on trust, transparency, and shared success with clients and communities."
                }
            ],
            image: "/img/vision_main.png",
            secondaryImage: "/img/vision_secondary.png"
        },
        {
            title: "Our Expertise",
            tagline: "Specialist Capability. Proven Delivery. Trusted Results.",
            heading: "Specialist Capability. Proven Delivery. Trusted Results.",
            description: (
                <>
                    <p>Finepoint Projects brings deep technical expertise across commercial, residential, and government construction, delivering complex projects in live, high-risk environments with precision and control. Our strength lies in combining specialist construction capability with disciplined project management, allowing us to execute technically demanding works while maintaining safety, quality, and program certainty.</p>
                    <p style={{ marginTop: '1.5rem' }}>We operate at the intersection of engineering excellence, constructability, and compliance—supporting clients from early coordination through to successful project completion.</p>
                </>
            ),
            points: [
                {
                    title: "Commercial Construction & Fit-Outs",
                    desc: "We deliver high-quality commercial construction and fit-out projects within operational workplaces, ensuring minimal disruption and seamless integration with existing environments. Our experience includes complex internal structures, architectural steel, feature staircases, balustrades, and precision-installed finishes aligned with modern workplace design and performance requirements."
                },
                {
                    title: "Residential & Mixed-Use Developments",
                    desc: "Our residential expertise spans large-scale apartment buildings and mixed-use developments, delivering façade elements, balconies, architectural metalwork, and structural components designed for durability, safety, and aesthetic cohesion. We understand the coordination demands of multi-trade environments and deliver consistent outcomes across all levels of a development."
                },
                {
                    title: "Government, Civic & Public Infrastructure",
                    desc: "Finepoint Projects is experienced in delivering government and civic infrastructure projects, including public amenities, parks, aquatic facilities, and community buildings. We manage complex stakeholder environments, strict compliance requirements, and live public interfaces—delivering safe, accessible, and community-focused assets."
                },
                {
                    title: "Specialised & Technical Construction Works",
                    desc: "We specialise in technically complex scopes such as structural steelworks, substations, industrial facilities, and custom infrastructure builds. Our team applies advanced construction methodologies, precise sequencing, and rigorous quality controls to deliver high-risk works safely and efficiently."
                },
                {
                    title: "Heritage Restoration & Asset Upgrades",
                    desc: "Our heritage and restoration expertise focuses on preserving architectural significance while integrating contemporary construction solutions. We deliver sensitive upgrades that maintain historical integrity while meeting modern compliance, safety, and performance standards."
                }
            ],
            image: "/img/expertise_main.png",
            secondaryImage: "/img/expertise_secondary.png"
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
                                <div className={`accordion-grid ${item.reversed ? 'reversed' : ''}`}>
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
                                            {item.tagline && <span className="tagline">{item.tagline}</span>}
                                            <h3>{item.heading}</h3>
                                            <div className="description">{item.description}</div>

                                            {item.points && (
                                                <ul className="mission-points">
                                                    {item.points.map((point, pIndex) => (
                                                        <li key={pIndex}>
                                                            <span className="checkmark">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                                </svg>
                                                            </span>
                                                            <div className="point-content">
                                                                <strong>{point.title}</strong>
                                                                <p>{point.desc}</p>
                                                            </div>
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
