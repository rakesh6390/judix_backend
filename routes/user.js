import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
import { validateProfileUpdate } from '../middleware/validation.js';

const router = express.Router();

router.get('/profile', protect, getProfile);
router.put('/profile', protect, validateProfileUpdate, updateProfile);

export default router;
