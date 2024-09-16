import User from '../models/user.js';
import { sendWelcomeMessage } from '../helpers/email.js';
import jwt from 'jsonwebtoken';

// Signup controller
export const welcomeMessage = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new User({ fullname, email, password });
    await user.save();

    // Generate JWT token
    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send welcome email
    const homeLink = "https://dph-frontend.vercel.app";
    await sendWelcomeMessage(email, user.fullname, homeLink);

    // Respond with the token and user data
    res.status(201).json({ token, user });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
