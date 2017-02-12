import { Map, fromJS } from 'immutable';
import {
  SET_ERROR,
  EMAIL_SENT,
  CLOSE_DISPLAY,
  TOGGLE_MORE_ABOUT,
} from '../constants/';

const initalState = Map({
  error: undefined, // undefined or message to user.
  emailSent: false,
  emailSentMessage: undefined,
  subject: undefined,
  revealMoreAbout: false,
});

function displayError(state, error) {
  let tempState = state;
  tempState = tempState.set('error', fromJS(error));
  return tempState;
}

function emailSent(state, data) {
  let tempState = state;
  tempState = tempState.set('emailSent', true);
  tempState = tempState.set('emailSentMessage', data.message);
  tempState = tempState.set('error', data.error);
  tempState = tempState.set('subject', data.subject);
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
    case TOGGLE_MORE_ABOUT:
      return state.set('revealMoreAbout', !state.get('revealMoreAbout'));
    default:
      return state;
  }
}

export default display;
