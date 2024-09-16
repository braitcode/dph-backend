import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.config.js";
import authRouter from "./src/routes/auth.js";
import userRouter from "./src/routes/user.js";
import newsletterRouter from "./src/routes/newsletterEmail.js";
// import passport from "./src/configs/passport.js"
// import googleAuth from "./src/routes/googleRoute.js";
import welcomeRouter from "./src/routes/welcomeMessage.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

// Connect to MongoDB
connectDB(dbUrl);

// Initialize Passport
app.use(passport.initialize());

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
// app.use("/api/newsletter", newsletterRouter);
app.use("/api/newsletter", newsletterRouter);
// app.use('/auth', googleAuth);
app.use('/api/welcome', welcomeRouter)

  app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
  });