import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { fromJS } from 'immutable';

import routing from './routing.js';
import display from './display.js';
import navigation from './navigation.js';


const rootReducer = combineReducers(Object.assign(
  {},
  {
    display,
    routing,
    navigation,
    form: (state = fromJS({}), action) => fromJS(formReducer(state.toJS(), action)),
  },
));

export default rootReducer;
