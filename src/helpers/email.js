import nodemailer from 'nodemailer';
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, NEWSLETTER_EMAIL_TEMPLATE, WELCOME_MESSAGE } from '../utils/emailTemplate.js';
import dotenv from 'dotenv';

dotenv.config(); 

// Configure the Nodemailer transporter using environment variables for email authentication
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Specify the email service provider (e.g., Gmail)
  auth: {
    user: process.env.EMAIL_USER, // Email address used for sending emails
    pass: process.env.EMAIL_PASS, // Email account password
  },
});

/**
 * Sends an email verification message to the user.
 *
 * @param {string} email - Recipient's email address.
 * @param {string} firstName - User's first name for personalization.
 * @param {string} verifyCode - Verification link or code to include in the email.
 * @returns {Promise} - Promise representing the result of the email sending process.
 */
export const sendVerifyEmail = (email, firstName, verifyCode) => {
  const mailOptions = {
    from: `"Digital Presence Hub" <${process.env.EMAIL_USER}>`, // Sender name and email
    to: email, // Recipient's email address
    subject: 'Email Verification', // Email subject line
    html: VERIFICATION_EMAIL_TEMPLATE
      .replace("{firstName}", firstName) // Replace placeholder with user's first name
      .replace("{verificationLink}", verifyCode), // Replace placeholder with the verification link
    category: "Email Verification", // Optional category for email tracking
  };

  return transporter.sendMail(mailOptions); // Send the email
};

// Send password reset email
export const sendResetEmail = (email, firstName, resetLink) => {
  const mailOptions = {
    from: `"Digital Presence Hub" <${process.env.EMAIL_USER}>`, // Sender name and email
    to: email, // Recipient's email address
    subject: 'Password Reset Request', // Email subject line
    html: PASSWORD_RESET_REQUEST_TEMPLATE
      .replace("{firstName}", firstName) // Replace placeholder with user's first name
      .replace("{resetLink}", resetLink), // Replace placeholder with the reset URL
    category: "Reset Password", // Optional category for email tracking
  };

  return transporter.sendMail(mailOptions); // Send the email
};

// Send password reset email
export const sendNewsletterMail = async (email, firstName, homeLink) => {
  const mailOptions = {
    from: `"Digital Presence Hub" <${process.env.EMAIL_USER}>`,  // Sender's email address
    to: email,  // Recipient's email address
    subject: 'Newsletter Subscription Confirmation',  // Corrected subject for newsletter
    html: NEWSLETTER_EMAIL_TEMPLATE
      .replace("{firstName}", firstName)  // Replace placeholder with user's first name
      .replace("{homeLink}", homeLink),   // Replace placeholder with the home URL or relevant link
      category: "Newsletter Subscription",
  };

  try {
    await transporter.sendMail(mailOptions);  // Send the email...
    console.log(`Newsletter email sent to ${email}`);
  } catch (error) {
    console.error("Error sending newsletter email:", error);
    throw new Error("Failed to send newsletter email");
  }
};

// send welcome message
export const sendWelcomeMessage = async (email, firstName, homeLink) => {
  const mailOptions = {
    from: `"Digital Presence Hub" <${process.env.EMAIL_USER}>`,  // Sender's email address
    to: email,  // Recipient's email address
    subject: 'Welcome Message',  // Corrected subject for newsletter
    html: WELCOME_MESSAGE
      .replace("{firstName}", firstName)  // Replace placeholder with user's first name
      .replace("{homeLink}", homeLink),   // Replace placeholder with the home URL or relevant link
      category: "Welcome Message",
  };

  try {
    await transporter.sendMail(mailOptions);  // Send the email...
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};
