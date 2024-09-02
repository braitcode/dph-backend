import { transporter } from "../helpers/email";
import dotenv from "dotenv"

export const sendEmail = async (req, res) => {
    const { firstName, lastName, email, countryCode, phone, message } = req.body;

    // Compose the email content
    const mailOptions = {
        from: email,
        to: {user: process.env.EMAIL_USER}, // Replace with the recipient's email address
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${countryCode} ${phone}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
};

