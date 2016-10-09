import express from 'express';
import Mailgun from 'mailgun-js';

const router = express.Router();

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const toEmail = process.env.EMAIL;


function userResponse(success) {
  if (!success) {
    return {
      success: false,
      type: 'emailError',
      message: 'There was an issue sending your email. This is a problem with the website.',
    };
  }
  return {
    success: true,
    message: 'Email sent successfully, thank you for your feedback!',
  };
}


router.route('/')
  .post(async function(req, res, next) {
    const { subject, comments, userEmail } = req.body;
    const mailgun = new Mailgun({ apiKey, domain });
    const emailOptions = {
      from: userEmail,
      to: toEmail,
      subject,
      text: comments,
    };

    mailgun.messages().send(emailOptions, (err, body) => {
      if (err) {
        return res.json(userResponse(false));
      }
      return res.json(userResponse(true));
    });
  });

export default router;
