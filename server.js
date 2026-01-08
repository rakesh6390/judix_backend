import 'dotenv/config'; // ✅ loads env variables

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database.js';

// Routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import taskRoutes from './routes/tasks.js';

// Connect DB (safe for serverless)
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/tasks', taskRoutes);

//
export default app; // ✅ REQUIRED FOR VERCEL
