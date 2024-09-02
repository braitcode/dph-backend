import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email provider
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or application-specific password
    }
});

