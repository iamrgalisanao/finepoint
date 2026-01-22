import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Brand Trust Bar */}
                <div className="footer-brand-bar">
                    <p className="trust-text">Trusted by over 6,000 Ambitious<br />Brands Across Australia</p>
                    <div className="brand-logos">
                        <span className="brand-logo">Beanca</span>
                        <span className="brand-logo">Mosvolk</span>
                        <span className="brand-logo">vagoda</span>
                        <span className="brand-logo">Recolect</span>
                    </div>
                    <button className="help-btn">
                        <span className="arrow">→</span> Need Help?
                    </button>
                </div>

                <div className="footer-main-content">
                    {/* Main CTA Section */}
                    <div className="footer-cta-section">
                        <h2 className="cta-heading">Ready to start your <br />Landmark Project?</h2>
                        <p className="cta-subtext">Contact us to work with a results-driven <br />premier construction company.</p>
                        <button className="btn-proposal">
                            <span className="arrow">→</span> Get My Free Proposal
                        </button>
                    </div>

                    {/* Link Columns */}
                    <div className="footer-links-grid">
                        <div className="link-col">
                            <ul>
                                <li><Link to="/#capabilities">Construction</Link></li>
                                <li><Link to="/#capabilities">Renovation</Link></li>
                                <li><Link to="/#capabilities">Rebuild Building</Link></li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <ul>
                                <li><Link to="/#about">About Us</Link></li>
                                <li><Link to="/#portfolio">Our Work</Link></li>
                                <li><Link to="/#contact">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <ul>
                                <li><Link to="/#capabilities">Services</Link></li>
                                <li><Link to="/#contact">Contact</Link></li>
                                <li><Link to="/#contact">Forum Support</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-info">
                    <div className="contact-blocks">
                        <div className="contact-block">
                            <div className="icon-circle">📞</div>
                            <div className="text">
                                <span className="label">Talk to an Expert</span>
                                <span className="value">Toll Free: (02) 9316 4444</span>
                            </div>
                        </div>
                        <div className="contact-block">
                            <div className="icon-circle">✉️</div>
                            <div className="text">
                                <span className="label">Have Any Questions?</span>
                                <span className="value">Mail us: info@finepointprojects.com.au</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>Copyright & design by FinepointProjects - 2026</p>
                    <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                        ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
