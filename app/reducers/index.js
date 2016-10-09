import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { fromJS } from 'immutable';

import routing from './routing.js';
import display from './display.js';


const rootReducer = combineReducers(Object.assign(
  {},
  {
    display,
    routing,
    form: (state = fromJS({}), action) => fromJS(formReducer(state.toJS(), action)),
  },
));

export default rootReducer;
