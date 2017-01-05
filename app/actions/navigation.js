import { TOGGLE_NAV } from '../constants/';

import { createAction } from 'redux-actions';

const toggleNav = createAction(TOGGLE_NAV);

export { toggleNav };
