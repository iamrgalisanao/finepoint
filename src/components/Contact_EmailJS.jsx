import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // EmailJS configuration from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Template parameters matching EmailJS template
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            project_type: formData.subject || 'Not specified',
            message: formData.message,
            to_email: 'james@finepointprojects.com.au'
        };

        try {
            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log('Email sent successfully:', response);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Auto-hide success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');

            // Auto-hide error message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
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
                                <p>0406 472 948</p>
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
                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    ✅ Thank you! Your proposal request has been sent successfully.
                                    We'll get back to you within 24 hours.
                                </div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="alert alert-error">
                                    ❌ Oops! Something went wrong. Please try again or contact us directly at
                                    james@finepointprojects.com.au
                                </div>
                            )}

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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Project Type</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Government Infrastructure">Government Infrastructure</option>
                                    <option value="Luxury Residential">Luxury Residential</option>
                                    <option value="Commercial Development">Commercial Development</option>
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
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Proposal Request'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
