import { sendNewsletterMail } from '../helpers/email.js';
import User from '../models/user.js';

export const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  // Validate the email field
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Basic email format validation
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Check if user already exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the newsletter email
    const homeLink = "https://dph-frontend.vercel.app";  // Replace with your actual domain
    await sendNewsletterMail(email, user.fullname, homeLink);

    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    res.status(500).json({ message: "Failed to subscribe to newsletter" });
  }
};
