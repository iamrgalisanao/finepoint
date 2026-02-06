# Quick Setup Checklist - Email Implementation

## ✅ Step-by-Step Setup (15 minutes)

### **Step 1: Sign Up for EmailJS** (3 minutes)
- [ ] Go to https://www.emailjs.com/
- [ ] Click "Sign Up" (top right)
- [ ] Create account with your email
- [ ] Verify your email address

---

### **Step 2: Add Email Service** (3 minutes)
- [ ] Log in to EmailJS dashboard
- [ ] Click "Email Services" in left sidebar
- [ ] Click "Add New Service"
- [ ] Choose "Gmail" (or your preferred provider)
- [ ] Click "Connect Account" and authorize
- [ ] **Copy the Service ID** (e.g., `service_abc123`)
- [ ] Save it somewhere safe

---

### **Step 3: Create Email Template** (4 minutes)
- [ ] Click "Email Templates" in left sidebar
- [ ] Click "Create New Template"
- [ ] **Set Template Name:** "Proposal Request"
- [ ] **Paste this template:**

```
Subject: New Proposal Request from {{from_name}}

Hello,

You have received a new proposal request from your website.

---
CLIENT DETAILS:
---
Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

---
MESSAGE:
---
{{message}}

---
This email was sent from the FinepointProjects contact form.
Reply directly to this email to respond to the client.
```

- [ ] **Set "To Email":** james@finepointprojects.com.au
- [ ] **Set "From Name":** FinepointProjects Website
- [ ] **Set "Reply To":** {{from_email}}
- [ ] Click "Save"
- [ ] **Copy the Template ID** (e.g., `template_xyz789`)

---

### **Step 4: Get Public Key** (1 minute)
- [ ] Click "Account" in left sidebar
- [ ] Click "General" tab
- [ ] Find "Public Key" section
- [ ] **Copy your Public Key** (e.g., `user_abc123xyz`)

---

### **Step 5: Install EmailJS Package** (1 minute)
- [ ] Open terminal in your project folder
- [ ] Run: `npm install @emailjs/browser`
- [ ] Wait for installation to complete

---

### **Step 6: Create Environment File** (2 minutes)
- [ ] Create a new file in project root: `.env`
- [ ] Paste this content (replace with YOUR IDs):

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

- [ ] **Replace the values** with your actual IDs from steps 2, 3, and 4
- [ ] Save the file

---

### **Step 7: Update .gitignore** (1 minute)
- [ ] Open `.gitignore` file
- [ ] Add these lines if not already present:

```
.env
.env.local
.env.*.local
```

- [ ] Save the file

---

### **Step 8: Replace Contact Component** (2 minutes)

**Option A: Replace existing file**
- [ ] Rename `src/components/Contact.jsx` to `Contact_OLD.jsx` (backup)
- [ ] Rename `src/components/Contact_EmailJS.jsx` to `Contact.jsx`

**Option B: Copy code manually**
- [ ] Open `src/components/Contact_EmailJS.jsx`
- [ ] Copy all the code
- [ ] Open `src/components/Contact.jsx`
- [ ] Replace all content with the copied code
- [ ] Save the file

---

### **Step 9: Add CSS Styles** (1 minute)
- [ ] Open `src/components/Contact.css`
- [ ] Scroll to the bottom
- [ ] Copy content from `CONTACT_ALERT_STYLES.css`
- [ ] Paste at the end of `Contact.css`
- [ ] Save the file

---

### **Step 10: Test the Form** (5 minutes)

- [ ] **Restart dev server:**
  - Stop current server (Ctrl+C)
  - Run: `npm run dev`
  - Wait for server to start

- [ ] **Open website:** http://localhost:5173

- [ ] **Scroll to Contact section**

- [ ] **Fill out the form:**
  - Name: Test User
  - Email: your-email@example.com
  - Project Type: Government Infrastructure
  - Message: This is a test message

- [ ] **Click "Send Proposal Request"**

- [ ] **Verify:**
  - Button shows "Sending..."
  - Success message appears
  - Form clears
  - Check james@finepointprojects.com.au for email

---

## 🎯 Expected Results

### **On Success:**
✅ Green success message appears  
✅ Form fields clear  
✅ Button returns to "Send Proposal Request"  
✅ Email arrives at james@finepointprojects.com.au within 1 minute

### **On Error:**
❌ Red error message appears  
❌ Form data remains (user can try again)  
❌ Check browser console for error details

---

## 🐛 Troubleshooting

### **"Email not sending"**
1. Check browser console (F12) for errors
2. Verify all environment variables are correct
3. Restart dev server: `npm run dev`
4. Check EmailJS dashboard for error logs

### **"Environment variables not found"**
1. Ensure `.env` file is in project root (not in src/)
2. Restart dev server after creating `.env`
3. Check variable names start with `VITE_`

### **"Email goes to spam"**
1. This is normal for first few emails
2. Mark as "Not Spam" in Gmail
3. Future emails will go to inbox

### **"Template not working"**
1. Check template variable names match exactly
2. Ensure template is saved in EmailJS
3. Verify Template ID is correct in `.env`

---

## 📧 Email Preview

When someone submits the form, you'll receive:

```
From: FinepointProjects Website
To: james@finepointprojects.com.au
Subject: New Proposal Request from John Smith

Hello,

You have received a new proposal request from your website.

---
CLIENT DETAILS:
---
Name: John Smith
Email: john@example.com
Project Type: Government Infrastructure

---
MESSAGE:
---
I'm interested in discussing a new government infrastructure project...

---
This email was sent from the FinepointProjects contact form.
Reply directly to this email to respond to the client.
```

---

## 🎉 Success!

Once you complete all steps and receive a test email, you're done!

The form will now:
- ✅ Send emails to james@finepointprojects.com.au
- ✅ Show success/error messages
- ✅ Disable form while sending
- ✅ Clear form after success
- ✅ Work on all devices

---

## 📊 Monitoring

### **EmailJS Dashboard**
- View sent emails: https://dashboard.emailjs.com/admin
- Check monthly quota (200 free emails)
- See delivery status
- View error logs

### **Upgrade if Needed**
- Free: 200 emails/month
- Paid: $7/month for 1,000 emails
- Upgrade at: https://dashboard.emailjs.com/admin/account

---

## 🔐 Security Notes

- ✅ `.env` file is in `.gitignore` (not committed to Git)
- ✅ Environment variables are only accessible in your code
- ✅ EmailJS public key is safe to use in frontend
- ✅ Emails are sent through EmailJS servers (secure)

---

**Need Help?** 
If you get stuck, check the full guide: `EMAIL_IMPLEMENTATION_GUIDE.md`

**Estimated Total Time:** 15-20 minutes  
**Difficulty:** Easy ⭐⭐☆☆☆
