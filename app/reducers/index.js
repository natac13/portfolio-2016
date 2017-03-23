import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';


import routing from './routing.js';
import display from './display.js';
import navigation from './navigation.js';
import windowSize from './windowSize.js';


const rootReducer = combineReducers(Object.assign(
  {},
  {
    display,
    routing,
    navigation,
    windowSize,
    form: formReducer,
  },
));

export default rootReducer;
