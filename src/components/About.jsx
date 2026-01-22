import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content reveal">
                        <div className="section-title" style={{ textAlign: 'left' }}>
                            <h2>Precision Engineering <br /><span className="accent">With a Vision</span></h2>
                            <div className="underline" style={{ margin: '0' }}></div>
                        </div>
                        <p>
                            Finepoint Projects has been at the forefront of the Australian construction industry for over three decades.
                            We specialize in delivering high-complexity infrastructure and luxury developments that stand the test of time.
                        </p>
                        <p>
                            Our approach integrates advanced 5D BIM technology with traditional engineering mastery,
                            ensuring that every project is executed with surgical precision and financial transparency.
                        </p>
                        <div className="about-stats-mini">
                            <div>
                                <h4>Legacy</h4>
                                <p>30+ years of operational excellence across Australia.</p>
                            </div>
                            <div>
                                <h4>Innovation</h4>
                                <p>Leading the industry in digital twin and BIM integration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-card reveal">
                        <h3>Our Core Values</h3>
                        <ul>
                            <li>
                                <span className="check">✔</span>
                                <span><strong>Uncompromising Integrity</strong> in every contract and joint venture.</span>
                            </li>
                            <li>
                                <span className="check">✔</span>
                                <span><strong>Technical Superiority</strong> through continuous R&D and training.</span>
                            </li>
                            <li>
                                <span className="check">✔</span>
                                <span><strong>Safety Leadership</strong> that exceeds national standards.</span>
                            </li>
                            <li>
                                <span className="check">✔</span>
                                <span><strong>Environmental Stewardship</strong> in large-scale urban development.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
