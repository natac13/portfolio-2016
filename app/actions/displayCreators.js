import {
  SET_ERROR,
  CLOSE_DISPLAY,
  TOGGLE_MORE_ABOUT,
} from '../constants/';


import { createAction } from 'redux-actions';

const setError = createAction(SET_ERROR);
const closeDisplay = createAction(CLOSE_DISPLAY);
const toggleMoreAbout = createAction(TOGGLE_MORE_ABOUT);

export {
  setError,
  closeDisplay,
  toggleMoreAbout,
};
