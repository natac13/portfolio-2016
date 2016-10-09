import { Map, fromJS } from 'immutable';
import {
  SET_ERROR,
  EMAIL_SENT,
  CLOSE_DISPLAY,
} from '../constants/';

const initalState = Map({
  error: undefined, // undefined or message to user.
  emailSent: false,
  emailSentMessage: undefined,
});

function displayError(state, error) {
  let tempState = state;
  tempState = tempState.set('error', fromJS(error));
  return tempState;
}

function emailSent(state, message) {
  let tempState = state;
  tempState = tempState.set('emailSent', true);
  tempState = tempState.set('emailSentMessage', message);
  return tempState;
}

function display(state = initalState, action) {
  switch (action.type) {
    case SET_ERROR:
      return displayError(state, action.payload);
    case EMAIL_SENT:
      return emailSent(state, action.payload);
    case CLOSE_DISPLAY:
      return state.set('emailSent', false);
    default:
      return state;
  }
}

export default display;
