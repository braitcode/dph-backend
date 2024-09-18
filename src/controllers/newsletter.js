import { sendNewsletterMail } from '../helpers/email.js';
import Subscriber from '../models/subscriber.js'; // Import the Subscriber model
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
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email is already subscribed to the newsletter" });
    }

    // Send the newsletter confirmation email
    const homeLink = "https://dph-frontend.vercel.app"; // Replace with your actual domain
    await sendNewsletterMail(email, user.fullname, homeLink);

    // Save the subscriber's email to the database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    res.status(500).json({ message: "Failed to subscribe to newsletter" });
  }
};
