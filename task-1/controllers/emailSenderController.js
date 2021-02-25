import sendEmail from '../utils/sendEmail.js';

// @desc    Sending email
// @route   POST /api/mail/send
// @access  Public
export const emailSender = async (req, res) => {
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

  res.status(200).json({ success: true, message: `An E-mail has been successfully send to ${email}` });
};
