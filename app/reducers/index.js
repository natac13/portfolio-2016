import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { fromJS } from 'immutable';

import routing from './routing.js';


const rootReducer = combineReducers(Object.assign(
  {},
  {
    routing,
    form: (state = fromJS({}), action) => fromJS(formReducer(state.toJS(), action)),
  },
));

export default rootReducer;
