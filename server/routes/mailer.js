import express from 'express';
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

import config from '../mailConfig.js';

const router = express.Router();

function userResponse(success, response) {
  if (!success) {
    return {
      success: false,
      type: 'emailError',
      message: 'There was an issue sending your email. This is a problem with the website.',
      ...response,
    };
  }
  return {
    success: true,
    message: 'Email sent successfully, thank you for your input ',
    ...response,
  };
}


router.route('/')
  .post(async function(req, res, next) {
    const { subject, comments } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: config.user,
          clientID: config.clientID,
          clientSecret: config.clientSecret,
          refreshToken: config.refreshToken,
          accessToken: config.accessToken,
        }),
      },
    });

    const mailOptions = {
      from: config.user,
      to: config.user,
      subject,
      text: comments,
    };

    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        return res.json(userResponse(false, error));
      }
      transporter.close();
      console.log(response)
      return res.json(userResponse(true, response));
    });
  });

export default router;
