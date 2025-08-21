# Email Setup Instructions for Contact Form

## Steps to Setup EmailJS for your contact form:

### 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended)
4. Connect your Gmail account (malindaprabath876@gmail.com)
5. Note down the **Service ID** (you'll need this)

### 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure for receiving client messages:

**Template Name:** Portfolio Contact Form

**Subject:** New Client Inquiry from {{from_name}}

**Content:**
```
Hello Malinda,

You have received a new message from your portfolio contact form:

Client Name: {{from_name}}
Client Email: {{from_email}}

Message:
{{message}}

---
Reply to this client directly at: {{from_email}}

This message was sent from your portfolio website contact form.
```

4. Note down the **Template ID** (you'll need this)

### 4. Get your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (starts with "user_" or similar)

### 5. Update your script.js file
Replace these placeholders in your `script.js` file:
- `YOUR_PUBLIC_KEY` - Replace with your actual public key
- `YOUR_SERVICE_ID` - Replace with your service ID
- `YOUR_TEMPLATE_ID` - Replace with your template ID

### Example:
```javascript
// Replace this line:
emailjs.init("YOUR_PUBLIC_KEY");

// With something like:
emailjs.init("user_abc123def456");

// And replace this line:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)

// With something like:
emailjs.send('service_xyz789', 'template_abc123', formData)
```

**Important:** The email template variables should match:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email address  
- `{{message}}` - Client's message
- `{{to_name}}` - Your name (Malinda Prabath)
- `{{to_email}}` - Your email (malindaprabath876@gmail.com)

### 6. Test your contact form
1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email (malindaprabath876@gmail.com) for the message

## Free Plan Limits
- EmailJS free plan allows 200 emails per month
- This should be sufficient for a personal portfolio

## Troubleshooting
- Make sure your email service is properly connected
- Check the browser console for any error messages
- Verify that all IDs are correctly copied from EmailJS dashboard

## Alternative: Using Formspree (Simpler Setup)
If you prefer a simpler setup, you can use Formspree instead:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form and get the endpoint URL
4. Replace the form action with the Formspree endpoint
5. Change the form method to "POST"

Example:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
