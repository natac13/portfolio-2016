import express from 'express';
// import Mailgun from 'mailgun-js';
import axios from 'axios';
const router = express.Router();

import mailgun from 'mailgun';

const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const toEmail = process.env.EMAIL;

const mg = new mailgun.Mailgun(apiKey);


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


// router.route('/')
//   .post(async function(req, res, next) {
//     const { subject, comments, userEmail, name } = req.body;
//     const mailgun = new Mailgun({ apiKey, domain });
//     const emailOptions = {
//       from: userEmail,
//       to: toEmail,
//       subject: `From - ${name}`,
//       text: comments,
//     };

//     mailgun.messages().send(emailOptions, (err, body) => {
//       if (err) {
//         console.log('email not sent');
//         return next(userResponse(false));
//       }
//       console.log(body);
//       console.log('maeesage sent');
//       return res.json(userResponse(true, subject));
//     });
//   });

// router.route('/')
//   .post(async function(req, res, next) {
//     const { subject, comments, userEmail, name } = req.body;
//     mg.messages.create(domain, {
//       from: userEmail,
//       to: [toEmail],
//       subject: `From - ${name}`,
//       text: comments,
//     })
//     .then(msg => res.json(userResponse(true, subject))) // logs response data
//     .catch(err => next(userResponse(false))); // logs any error

//   });


router.route('/')
  .post(async function(req, res, next) {
    const { subject, comments, userEmail, name } = req.body;

    mg.sendText(userEmail, [toEmail], name, comments, 'seancampbellnatac.com', (err) => {
      if (err) { return next(err); }
      return res.json(userResponse(true));
    });
  });

export default router;
