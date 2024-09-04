import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.config.js";
import authRouter from "./src/routes/auth.js";
import userRouter from "./src/routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

// Connect to MongoDB
connectDB(dbUrl);

// middleware
app.use(express.json());

// cors
let corsOptions = { 
  origin : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:8000', 'https://dph-backend.onrender.com'], 
} 
// let corsOptions = { 
//   origin : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'https://dph-backend.onrender.com'], 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// };
  app.use(cors(corsOptions));

  // Root route
app.get('/', (req, res) => {
    res.send('Welcome to Digital Presence Hub Backend');
  });

// Routers
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

  app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
  });