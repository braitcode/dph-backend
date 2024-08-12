import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000


// middleware
app.use(express.json());

// cors
let corsOptions = { 
    origin : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'], 
  } 
  app.use(cors(corsOptions));

  // Root route
app.get('/', (req, res) => {
    res.send('Welcome to Digital Presence Hub Backend');
  });

  app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
  });