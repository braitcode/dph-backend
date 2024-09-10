import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.config.js";
import authRouter from "./src/routes/auth.js";
import userRouter from "./src/routes/user.js";
// import { google } from "googleapis";
import newsletterRouter from "./src/routes/newsletterEmail.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// // Route to handle Google OAuth login
// app.get('/auth/google', (req, res) => {
//   const scopes = ['https://www.googleapis.com/auth/userinfo.profile'];
//   const url = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes,
//   });
//   res.redirect(url);
// });

// // Route to handle Google OAuth callback
// app.get('/auth/google/callback', async (req, res) => {
//   const code = req.query.code;
//   const { tokens } = await oauth2Client.getToken(code);
//   oauth2Client.setCredentials(tokens);

//   // Do something with the tokens (e.g., get user info)
//   res.send('Google OAuth successful');
// });

// Connect to MongoDB
connectDB(dbUrl);

// middleware
app.use(express.json());

// cors
let corsOptions = { 
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'https://dph-backend.onrender.com', 'https://dph-frontend.vercel.app'], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
  app.use(cors(corsOptions));

  // Root route
app.get('/', (req, res) => {
    res.send('Welcome to Digital Presence Hub Backend');
  });

// Routers
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/newsletter", newsletterRouter);

  app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
  });