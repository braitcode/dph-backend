import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from '../models/user.js'; // Adjust the path according to your project structure
import jwt from 'jsonwebtoken';
import { sendWelcomeMessage } from '../helpers/email.js';

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://dph-backend.onrender.com/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const { id, name, emails } = profile;
  try {
    let user = await User.findOne({ googleId: id });

    if (!user) {
      user = new User({
        googleId: id,
        firstName: name.givenName,
        lastName: name.familyName,
        email: emails[0].value
      });
      await user.save();

      const homeLink = "https://dph-frontend.vercel.app";
      await sendWelcomeMessage(user.email, name.givenName + ' ' + name.familyName, homeLink);
    }

    const payload = {
      id: user._id,
      email: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return done(null, { token, user });
  } catch (error) {
    return done(error, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
