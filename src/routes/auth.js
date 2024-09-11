import express from 'express';
import { forgotPassword, login, resetPassword, signUp } from '../controllers/auth.js';
import { upload } from '../helpers/multer.js';
import passport from 'passport';

const router = express.Router();

router.post("/login", login);
router.post("/signup", upload.single('image'), signUp);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:resetToken", resetPassword);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const { token, user } = req.user;
  // Send user information as a query parameter
  res.redirect(`https://dph-frontend.vercel.app/oauth-callback?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`);
});


export default router