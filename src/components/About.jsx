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
                    <p>We don’t simply construct assets; we create resilient, functional environments that support communities, protect client reputations, and stand the test of time. Through strong leadership, proven systems, and collaborative delivery, we consistently transform design intent into built outcomes with certainty and confidence.</p>
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
                    <p>Through disciplined systems, experienced leadership, and collaborative delivery, Finepoint Projects aims to shape resilient built environments that serve communities, support economic growth, and endure for generations. We envision a future where construction excellence is defined not by scale alone, but by precision, accountability, and long-term value.</p>
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
                    <p>We operate at the intersection of engineering excellence, constructability, and compliance—supporting clients from early coordination through to successful project completion.</p>
                </>
            ),
            points: [
                {
                    title: "Commercial Construction & Fit-Outs",
                    desc: "We deliver high-quality commercial construction and fit-out projects within operational workplaces, ensuring minimal disruption and seamless integration with existing environments."
                },
                {
                    title: "Residential & Mixed-Use Developments",
                    desc: "Our residential expertise spans large-scale apartment buildings and mixed-use developments, delivering façade elements, balconies, and architectural metalwork."
                },
                {
                    title: "Government, Civic & Public Infrastructure",
                    desc: "Finepoint Projects is experienced in delivering government and civic infrastructure projects, including public amenities, parks, and aquatic facilities."
                }
            ],
            image: "/img/expertise_main.png",
            secondaryImage: "/img/expertise_secondary.png"
        }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <header className="creative-about-header reveal">
                    <div className="header-layout">
                        <div className="header-tag">
                            <span className="index">01</span>
                            <span className="divider"></span>
                            <span className="label">WHO WE ARE</span>
                        </div>
                        <div className="header-main">
                            <h2>The <span className="outline">Technical</span> DNA of <span className="accent">Finepoint</span></h2>
                            <p className="header-desc">
                                We are more than builders; we are the technical architects of the Australian skyline,
                                bringing disciplined precision to every high-stakes environment.
                            </p>
                        </div>
                        <div className="header-decor">
                            <div className="blueprint-line"></div>
                            <div className="coordinate-marker">33.9473° S, 151.1927° E</div>
                        </div>
                    </div>
                </header>

                <div className="about-accordion">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="accordion-header"
                                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                            >
                                <span className="item-number">0{index + 1}</span>
                                <h3>{item.title}</h3>
                                <div className="accordion-icon">
                                    <span className="plus-line"></span>
                                    <span className="plus-line"></span>
                                </div>
                            </div>

                            <div className="accordion-body">
                                <article className={`blog-post ${item.reversed ? 'reversed' : ''}`}>
                                    <div className="post-media">
                                        <div className="main-image">
                                            <img src={item.image} alt={item.title} />
                                            {item.secondaryImage && (
                                                <div className="floating-image desktop-only">
                                                    <img src={item.secondaryImage} alt={`${item.title} Detail`} />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="post-content">
                                        <div className="content-inner">
                                            <h4 className="post-heading">{item.heading}</h4>
                                            <div className="post-description">
                                                {item.description}
                                            </div>

                                            {item.points && (
                                                <div className="post-features">
                                                    {item.points.map((point, pIndex) => (
                                                        <div key={pIndex} className="feature-item">
                                                            <span className="feature-marker"></span>
                                                            <div className="feature-text">
                                                                <strong>{point.title}</strong>
                                                                <p>{point.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
