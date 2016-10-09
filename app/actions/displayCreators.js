import { SET_ERROR, CLOSE_DISPLAY } from '../constants/';


import { createAction } from 'redux-actions';

const setError = createAction(SET_ERROR);
const closeDisplay = createAction(CLOSE_DISPLAY);

export {
  setError,
  closeDisplay,
};
