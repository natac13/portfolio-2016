import {
  SEND_EMAIL,
  EMAIL_SENT,
} from '../constants/';

import { createAction } from 'redux-actions';

import { CALL_API } from '../middleware/api.js';

function sendEmail(userEmail, subject, comments) {
  return {
    [CALL_API]: {
      type: SEND_EMAIL,
      payload: {
        userEmail,
        subject,
        comments,
      },
    },
  };
}

const emailSent = createAction(EMAIL_SENT);


export { sendEmail, emailSent };
