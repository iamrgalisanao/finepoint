# Email Implementation Guide - Send Proposal Request

**Target Email:** james@finepointprojects.com.au  
**Form Location:** Contact Section  
**Date:** February 4, 2026

---

## 📋 Overview

This guide provides **3 implementation options** for sending emails from your contact form, ranked from easiest to most robust.

---

## 🎯 Option 1: EmailJS (Recommended - Easiest & Free)

**Best for:** Quick setup, no backend needed, free tier available

### **Pros:**
- ✅ No backend server required
- ✅ Free tier: 200 emails/month
- ✅ Easy to implement (15 minutes)
- ✅ Works with static sites
- ✅ Email templates with customization

### **Cons:**
- ⚠️ Email visible in frontend code (use environment variables)
- ⚠️ Limited to 200 emails/month on free tier

---

### **Step-by-Step Implementation:**

#### **1. Sign Up for EmailJS**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

#### **2. Configure EmailJS**

1. **Add Email Service:**
   - Go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account
   - Note the **Service ID** (e.g., `service_abc123`)

2. **Create Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```
Subject: New Proposal Request from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}

---
Sent from FinepointProjects Contact Form
```

   - Note the **Template ID** (e.g., `template_xyz789`)

3. **Get Public Key:**
   - Go to "Account" → "General"
   - Copy your **Public Key** (e.g., `user_abc123xyz`)

#### **3. Install EmailJS**

```bash
npm install @emailjs/browser
```

#### **4. Create Environment Variables**

Create `.env` file in project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
VITE_RECIPIENT_EMAIL=james@finepointprojects.com.au
```

Add to `.gitignore`:
```
.env
.env.local
```

#### **5. Update Contact.jsx**

Replace the current Contact.jsx with this:

```jsx
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

        // EmailJS configuration
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Template parameters
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
```

#### **6. Add CSS for Alert Messages**

Add to `Contact.css`:

```css
/* Alert Messages */
.alert {
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
    animation: slideDown 0.3s ease;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.alert-success {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
}

.light-theme .alert-success {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
}

.alert-error {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
}

.light-theme .alert-error {
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
}

/* Button disabled state */
.submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```

#### **7. Test the Implementation**

1. Start your dev server: `npm run dev`
2. Fill out the contact form
3. Submit and check:
   - Success message appears
   - Email arrives at james@finepointprojects.com.au
   - Form resets after submission

---

## 🎯 Option 2: Formspree (Alternative - Also Easy)

**Best for:** Simple setup, no coding required

### **Pros:**
- ✅ No backend needed
- ✅ Free tier: 50 submissions/month
- ✅ Spam protection included
- ✅ Email notifications

### **Cons:**
- ⚠️ Limited to 50 submissions/month on free tier
- ⚠️ Less customization than EmailJS

### **Implementation:**

1. **Sign up at [https://formspree.io/](https://formspree.io/)**

2. **Create a new form** and get your form ID (e.g., `xpznabcd`)

3. **Update Contact.jsx:**

```jsx
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
        const response = await fetch(formspreeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _replyto: formData.email,
                _subject: `New Proposal Request from ${formData.name}`
            })
        });

        if (response.ok) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setSubmitStatus('error');
        }
    } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
};
```

---

## 🎯 Option 3: Custom Backend (Most Robust)

**Best for:** Full control, unlimited emails, professional setup

### **Pros:**
- ✅ Complete control
- ✅ Unlimited emails
- ✅ Custom validation
- ✅ Database logging
- ✅ No third-party dependencies

### **Cons:**
- ⚠️ Requires backend server
- ⚠️ More complex setup
- ⚠️ Hosting costs

### **Quick Setup with Node.js + Nodemailer:**

See separate file: `BACKEND_EMAIL_SETUP.md`

---

## 📊 Comparison Table

| Feature | EmailJS | Formspree | Custom Backend |
|---------|---------|-----------|----------------|
| Setup Time | 15 min | 10 min | 1-2 hours |
| Free Tier | 200/month | 50/month | Unlimited |
| Backend Required | No | No | Yes |
| Customization | High | Medium | Full |
| Spam Protection | Basic | Yes | Custom |
| Cost (Paid) | $7/month | $10/month | Hosting only |
| Best For | Most cases | Simple forms | Enterprise |

---

## 🚀 Recommended Implementation

**For FinepointProjects, I recommend Option 1 (EmailJS) because:**

1. ✅ Quick to implement (15 minutes)
2. ✅ 200 emails/month is sufficient for a construction company
3. ✅ No backend server needed
4. ✅ Professional email templates
5. ✅ Easy to upgrade if needed

---

## 📝 Next Steps

1. **Choose your option** (EmailJS recommended)
2. **Follow the step-by-step guide** above
3. **Test thoroughly** with different email providers
4. **Monitor submissions** in your EmailJS dashboard
5. **Upgrade if needed** when you exceed free tier

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** to Git
2. **Use environment variables** for all sensitive data
3. **Add rate limiting** to prevent spam
4. **Validate all inputs** on both frontend and backend
5. **Use HTTPS** in production
6. **Add CAPTCHA** if spam becomes an issue

---

## 🐛 Troubleshooting

### Email not sending?
- Check EmailJS dashboard for errors
- Verify environment variables are loaded
- Check browser console for errors
- Ensure email service is connected

### Emails going to spam?
- Add SPF/DKIM records to your domain
- Use a professional email service
- Avoid spam trigger words
- Include unsubscribe link

### Form not resetting?
- Check `setFormData` is called after success
- Verify state is updating correctly
- Clear browser cache

---

**Need help?** Let me know which option you'd like to implement, and I'll help you set it up! 🚀
