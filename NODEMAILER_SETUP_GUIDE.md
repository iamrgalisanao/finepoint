# Nodemailer Email Setup Guide

**Target:** james@finepointprojects.com.au  
**Solution:** Node.js + Express + Nodemailer  
**Estimated Time:** 1.5-2 hours

---

## 📋 Overview

This guide shows you how to set up a custom backend server using Nodemailer to handle email submissions from your contact form.

### **What You'll Build:**

```
Frontend (React)  →  Backend (Express)  →  Gmail SMTP  →  james@finepointprojects.com.au
```

---

## 🎯 Option 1: Serverless Functions (Recommended)

**Best for:** Easy deployment, no server management, free tier

### **Using Vercel Functions**

#### **1. Create Backend Folder**

```bash
mkdir backend
cd backend
npm init -y
```

#### **2. Install Dependencies**

```bash
npm install express nodemailer cors dotenv
```

#### **3. Create `backend/api/send-email.js`**

```javascript
const nodemailer = require('nodemailer');

// Serverless function handler
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'james@finepointprojects.com.au',
      replyTo: email,
      subject: `New Proposal Request from ${name}`,
      html: `
        <h2>New Proposal Request</h2>
        <hr>
        <h3>Client Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${subject || 'Not specified'}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Sent from FinepointProjects Contact Form
        </p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};
```

#### **4. Create `backend/vercel.json`**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ]
}
```

#### **5. Deploy to Vercel**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd backend
vercel

# Follow prompts, note the deployment URL
```

#### **6. Set Environment Variables in Vercel**

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `EMAIL_USER`: your-gmail@gmail.com
   - `EMAIL_PASS`: your-app-password

---

## 🎯 Option 2: Traditional Server (Railway/Render)

**Best for:** More control, traditional deployment

### **Complete Backend Setup**

#### **1. Create Backend Structure**

```bash
mkdir backend
cd backend
npm init -y
```

#### **2. Install Dependencies**

```bash
npm install express nodemailer cors dotenv express-rate-limit helmet
```

#### **3. Create `backend/server.js`**

```javascript
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'OPTIONS'],
  credentials: true
}));

// Body parser
app.use(express.json());

// Rate limiting - 5 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests, please try again later.'
});

app.use('/api/send-email', limiter);

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready');
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email address' 
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'james@finepointprojects.com.au',
      replyTo: email,
      subject: `New Proposal Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #ff6b35; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .detail { margin: 10px 0; }
            .label { font-weight: bold; color: #555; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #ff6b35; margin: 15px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Proposal Request</h2>
            </div>
            <div class="content">
              <h3>Client Details:</h3>
              <div class="detail">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="detail">
                <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="detail">
                <span class="label">Project Type:</span> ${subject || 'Not specified'}
              </div>
              
              <h3>Message:</h3>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
              
              <div class="footer">
                <p>Sent from FinepointProjects Contact Form</p>
                <p>Reply directly to this email to respond to the client</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Proposal Request

CLIENT DETAILS:
Name: ${name}
Email: ${email}
Project Type: ${subject || 'Not specified'}

MESSAGE:
${message}

---
Sent from FinepointProjects Contact Form
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent:', info.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email recipient: ${process.env.RECIPIENT_EMAIL}`);
});
```

#### **4. Create `backend/.env`**

```env
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=james@finepointprojects.com.au

# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### **5. Create `backend/package.json` scripts**

```json
{
  "name": "finepoint-backend",
  "version": "1.0.0",
  "description": "Email backend for FinepointProjects",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemailer": "^6.9.7",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-rate-limit": "^7.1.5",
    "helmet": "^7.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

#### **6. Create `backend/.gitignore`**

```
node_modules/
.env
.env.local
.env.*.local
*.log
```

---

## 📧 Gmail App Password Setup

### **Step 1: Enable 2-Factor Authentication**

1. Go to Google Account: https://myaccount.google.com/
2. Security → 2-Step Verification
3. Follow setup instructions

### **Step 2: Create App Password**

1. Go to: https://myaccount.google.com/apppasswords
2. Select app: "Mail"
3. Select device: "Other" → "FinepointProjects Backend"
4. Click "Generate"
5. **Copy the 16-character password**
6. Use this as `EMAIL_PASS` in `.env`

---

## 🔄 Frontend Integration

### **Update `src/components/Contact.jsx`**

```javascript
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

        try {
            const response = await fetch(`${API_URL}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // ... rest of component (same as before)
};
```

### **Create `.env` in project root**

```env
# Development
VITE_API_URL=http://localhost:3001

# Production (update after deployment)
# VITE_API_URL=https://your-backend.railway.app
```

---

## 🚀 Deployment Options

### **Option A: Railway (Recommended - Free Tier)**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
cd backend
railway init
railway up

# Set environment variables
railway variables set EMAIL_USER=your-gmail@gmail.com
railway variables set EMAIL_PASS=your-app-password
railway variables set RECIPIENT_EMAIL=james@finepointprojects.com.au
railway variables set FRONTEND_URL=http://localhost:5173

# Get deployment URL
railway domain
```

### **Option B: Render**

1. Go to https://render.com/
2. Create new "Web Service"
3. Connect GitHub repo
4. Set:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
5. Add environment variables
6. Deploy

### **Option C: Heroku**

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
cd backend
heroku create finepoint-backend

# Set environment variables
heroku config:set EMAIL_USER=your-gmail@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set RECIPIENT_EMAIL=james@finepointprojects.com.au

# Deploy
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

---

## ✅ Testing

### **Local Testing**

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
npm run dev

# Test form at http://localhost:5173
```

### **Test with cURL**

```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Government Infrastructure",
    "message": "This is a test message"
  }'
```

---

## 📊 Cost Comparison

| Platform | Free Tier | Paid Plan | Best For |
|----------|-----------|-----------|----------|
| Vercel Functions | 100GB-hrs/month | $20/month | Serverless |
| Railway | $5 credit/month | $5/month | Easy setup |
| Render | 750 hrs/month | $7/month | Reliability |
| Heroku | None | $7/month | Enterprise |

---

## 🔒 Security Checklist

- [ ] Gmail App Password created (not regular password)
- [ ] `.env` file in `.gitignore`
- [ ] Rate limiting enabled (5 req/15min)
- [ ] CORS configured for your domain only
- [ ] Helmet.js security headers
- [ ] Input validation on backend
- [ ] HTTPS in production

---

## 🐛 Troubleshooting

### **"Invalid login" error**
- Use App Password, not regular Gmail password
- Enable 2FA first
- Regenerate App Password

### **CORS error**
- Check `FRONTEND_URL` in backend `.env`
- Verify CORS origin matches your frontend URL

### **Rate limit exceeded**
- Wait 15 minutes
- Adjust rate limit in `server.js`

---

## 📝 Summary

**Pros:**
- ✅ Full control over email sending
- ✅ Unlimited emails (Gmail limit: 500/day)
- ✅ Custom email templates
- ✅ No third-party dependencies

**Cons:**
- ⚠️ Requires backend hosting
- ⚠️ More complex setup
- ⚠️ Need to manage server

**Recommended:** Use Railway for easiest deployment with free tier!
