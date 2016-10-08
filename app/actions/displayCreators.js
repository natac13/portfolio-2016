import { SET_ERROR } from '../constants/';


import { createAction } from 'redux-actions';

const setError = createAction(SET_ERROR);

export {
  setError,
};
