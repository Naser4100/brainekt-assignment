import sendEmail from '../utils/sendEmail.js';
import UserModel from '../models/UserModel.js'

// @desc    Sending email and also save user Data
// @route   POST /api/mail/send
// @access  Public
export const emailSender = async (req, res) => {
  try {
    // Destructuring email from request body
    const { email } = req.body;

    // message body that will be send
    const message = `Hi there`;

    // This method will send the mail
    await sendEmail({
      email: email,
      subject: 'Website cost calculator',
      message,
    });

    const user = await UserModel.create(req.body);

    res.status(201).json({
      success: true,
      message: `An E-mail has been successfully sent to ${email} and user data saved to NoSQL database` ,
      user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
