import express from 'express';

const router = express.Router();

const apiKey = process.env.MAILGUN_API_KEY;
const apiKey = process.env.SENDINBLUE_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const toEmail = process.env.EMAIL;

const mailgun = require('mailgun-js')({ apiKey, domain });
// const sendinblue = require('sendinblue-api');
// const blueMail = new sendinblue({ apiKey })

function userResponse(success, subject, error) {
  if (!success) {
    return {
      success: false,
      type: 'emailError',
      message: 'There was an issue sending your email. This is a problem with the website.',
      subject,
      error,
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
    // const emailOptions = {
    //   from: [ userEmail ],
    //   to: { [toEmail]: 'Sean Campbell' },
    //   subject: 'Website Contact',
    //   text: comments,
    // };
    const emailOptions = {
      from: userEmail,
      to: toEmail,
      subject: 'Website Contact',
      text: comments,
    };
    // return res.json(userResponse(true, undefined));

    // blueMail.send_email(emailOptions, (err, response) => {
    //   if (err) { return next(userResponse(false, '', err)); }
    //   return res.json(userResponse(true, undefined));
    // });

    mailgun.messages().send(emailOptions, (err, body) => {
      if (err) {
        return next(userResponse(false, '', err));
      }
      return res.json(userResponse(true, undefined));
    });
  });

export default router;
