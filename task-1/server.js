import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

// Routes files
import emailSender from './routes/emailSenderRoutes.js';

// Load env vars
dotenv.config({ path: './config/config.env' });

// Database Connection
connectDB();

// Initialize expressJs
const app = express();

// Body parse
app.use(express.json());

// Mount routers for send the request to respective route handler
app.use('/api/mail', emailSender);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));