import React, { useEffect } from 'react';
import './QuoteModal.css';

const QuoteModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-effect animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>Project Inquiry</h2>
                    <p>Request a detailed consultation for your next venture</p>
                </div>
                <form className="modal-form" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Proposal request submitted successfully.');
                    onClose();
                }}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Smith" required />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" placeholder="Strategic Developments Ltd" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Sector</label>
                        <select required>
                            <option value="">Select Sector</option>
                            <option value="gov">Government</option>
                            <option value="res">Residential</option>
                            <option value="comm">Commercial</option>
                            <option value="health">Healthcare</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Brief Description</label>
                        <textarea rows="4" placeholder="Outline your project scope and objectives..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary modal-submit">Request Quote</button>
                </form>
            </div>
        </div>
    );
};

export default QuoteModal;
