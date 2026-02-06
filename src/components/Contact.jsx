import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Our team will contact you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-title">
                    <span className="subtitle">GET IN TOUCH</span>
                    <h2>Let's discuss your next <span className="accent">landmark project</span></h2>
                    <div className="underline"></div>
                </div>

                <div className="contact-grid">
                    <div className="contact-info animate-fade-in-up">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h3>Principal Office</h3>
                                <p>14/19 Stanley Street, Woollahra</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-text">
                                <h3>Direct Line</h3>
                                <p> 0406 472 948</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-text">
                                <h3>General Inquiries</h3>
                                <p>james@finepointprojects.com.au</p>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <div className="glass-effect map-box">
                                <p>Strategic Presence Across Sydney & Gold Coast</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <form className="contact-form glass-effect" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. John Smith"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Project Type</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Category</option>
                                    <option value="government">Government Infrastructure</option>
                                    <option value="residential">Luxury Residential</option>
                                    <option value="commercial">Commercial Development</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project requirements..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Send Proposal Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
