import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { compose } from 'ramda';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers/';

// Middlewares
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { routerMiddleware } from 'react-router-redux';
import apiMiddleware from '../middleware/api.js';

const loggerMiddleware = logger();
const router = routerMiddleware(browserHistory);
const middlewares = [router, promiseMiddleware, apiMiddleware];
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  middlewares.push(loggerMiddleware); // no need for logging in production...
}

//  localStorage
import persistState from 'redux-localstorage';

function serialize(collection) {
  try {
    // if the collection is a immutable data structure returned the serialized
    // version
    return JSON.stringify(collection.toJS());
  } catch (err) {
    return null;
  }
}

function deserialize(string) {
  // The string could be "null" which needs to be parsed to null.
  const data = JSON.parse(string);
  if (data) {
    return fromJS(data);
  }
  return data;
}
// the storagePath is whatever slice of the store I want to persist
const storagePaths = [''];
const storageConfig = {
  slicer: (paths) => (state) => state.getIn(paths),
  serialize,
  deserialize,
  merge: (initial, persistent) => {
    if (persistent) {
      return initial.setIn(storagePaths, persistent);
    }
    return initial;
  },
};

export default function configureStore(initialState) {
    // applyMiddleware supercharges createStore with middleware:
    // We can use it exactly like “vanilla” createStore.
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      // persistState(storagePaths, storageConfig)
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
