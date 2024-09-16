import express from 'express';
import { welcomeMessage } from '../controllers/welcome.js';

const router = express.Router();

router.post("/welcome", welcomeMessage);

export default router;