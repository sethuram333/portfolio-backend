import express from 'express';
import { submitMessage, getMessages } from '../controllers/contact.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/')
  .post(submitMessage)
  .get(protect, getMessages);

export default router;
