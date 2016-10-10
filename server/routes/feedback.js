import express from 'express';
import Promise from 'bluebird';
import moment from 'moment';
import fs from 'fs';
const writeFile = Promise.promisify(fs.writeFile);

const router = express.Router();

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
  .post(async function(req, res) {
    const { subject, comments, userEmail } = req.body;
    const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    const month = moment().format('MMM');
    const feedbackFile = `${__dirname}/../feedbackLogs/${month}_log.md`;

    const logMessage = `**${subject}** - From *<${userEmail}*>
${date}
>${comments}` + '\n\n';

    const writeFileOptions = {
      flag: 'a',
      encoding: 'utf8',
    };

    writeFile(feedbackFile, logMessage, writeFileOptions)
      .then(() => res.status(200).json(userResponse(true, subject)))
      .catch((err) => res.status(500).json(userResponse(false, err)));
  });

export default router;
