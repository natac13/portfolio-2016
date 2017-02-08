import express from 'express';
import Mailgun from 'mailgun-js';
import axios from 'axios';
const router = express.Router();

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const toEmail = process.env.EMAIL;


function userResponse(success, subject) {
  if (!success) {
    return {
      success: false,
      type: 'emailError',
      message: 'There was an issue sending your email. This is a problem with the website.',
      subject,
    };
  }
  return {
    success: true,
    message: 'Email sent successfully, thank you for your feedback!',
    subject,
  };
}


router.route('/')
  .post(async function(req, res, next) {
    const { subject, comments, userEmail, name } = req.body;
    const mailgun = new Mailgun({ apiKey, domain });
    const emailOptions = {
      from: userEmail,
      to: toEmail,
      subject: `From - ${name}`,
      text: comments,
    };

    mailgun.messages().send(emailOptions, (err, body) => {
      if (err) {
        console.log('email not sent');
        return next(userResponse(false));
      }
      console.log(body);
      console.log('maeesage sent');
      return res.json(userResponse(true, subject));
    });
  });

// router.route('/')
//   .post(async function(req, res, next) {
//     const postURL = 'https://api.mailgun.net/v3/seancampbell.com/messages';
//     const opt = {
//       auth: 'api:' + apiKey,
//       params: {
//         from: 'test@example.com',
//         to: ['sean.campbell13@gmail.com'],
//         text: "tetsting",
//       },
//     };
//     axios.post(postURL, opt)
//       .then(() => {
//         console.log('yesp');
//       })
//       .catch(console.log);


//   });

export default router;
