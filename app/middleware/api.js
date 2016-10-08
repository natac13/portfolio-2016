import R from 'ramda';
import axios from 'axios';
import { setError, emailSent } from '../actions/';
import { SEND_EMAIL } from '../constants/';

export const CALL_API = Symbol('Call API');


// Api Middleware itself
export default ({ dispatch, getState }) => (next) => (action) => {
  const callAPI = action[CALL_API];

  // pass to next middleware if normal action and not a CALL_API action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  // Pull out table and data from the callAPI object
  const { type, payload } = callAPI;

  if (type === SEND_EMAIL) {
    console.log(payload);
    return axios.post('/feedback', payload)
      .then((res) => emailSent(res))
      .catch((error) => setError(error));
  }

  return next(action);
};
