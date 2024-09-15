import passport from "../configs/passport.js";
import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';


dotenv.config();
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1d' });
  // Send user information as a query parameter
  res.redirect(`https://dph-frontend.vercel.app/oauth-callback?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`);
});

export default router;