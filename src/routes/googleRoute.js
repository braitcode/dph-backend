import passport from "../configs/passport.js";
import dotenv from "dotenv";
import express from "express";
import jwt from 'jsonwebtoken';

dotenv.config();
const router = express.Router();

const frontendurl = process.env.FRONTEND_URL;

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/', session: false }), (req, res) => {
    const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.redirect(`${frontendurl}/?token=${token}&user=${encodeURIComponent(JSON.stringify(req.user))}`);
});

export default router;
