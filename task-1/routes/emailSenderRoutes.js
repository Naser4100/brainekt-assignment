// Library import statement
import express from 'express';

// Controller import statement
import {
  emailSender
} from '../controllers/emailSenderController.js';

// Initialize express Router
const router = express.Router();

// The request URL and method that server listen for sending email
router.route('/send').post(emailSender);

export default router;
