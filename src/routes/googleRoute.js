import passport from "../configs/passport.js";
import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';


dotenv.config();
const router = express.Router();

const frontendurl = process.env.FRONTEND_URL;

// Route to initiate Google OAuth
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  // Callback route for Google to redirect to
  router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }, { session: false }), (req, res) => {
    // After successful authentication, create a JWT token for the user
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1d' });
  // Send user information as a query parameter
//   res.redirect(`${frontendurl}/?token=${token}&user=${encodeURIComponent(JSON.stringify(req.user))}`);
  res.redirect(`${frontendurl}`);
});

export default router;