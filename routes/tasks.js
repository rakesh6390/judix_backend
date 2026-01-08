import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import { protect } from '../middleware/auth.js';
import { validateTask } from '../middleware/validation.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/', validateTask, createTask);
router.get('/', getTasks);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

export default router;
