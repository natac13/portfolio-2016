import { Map } from 'immutable';
import {
  TOGGLE_NAV,
} from '../constants/';


const initialState = Map({
  open: false,
  pageTopBtn: false,
});


function navigation(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return state.set('open', !state.get('open'));
    default:
      return state;
  }
}

export default navigation;
