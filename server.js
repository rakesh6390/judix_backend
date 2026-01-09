import 'dotenv/config'; // ✅ BEST FIX

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database.js';

// Routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import taskRoutes from './routes/tasks.js';

// Connect DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
