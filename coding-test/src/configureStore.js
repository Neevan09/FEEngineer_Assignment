/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
// import thunk from "redux-thunk";
import createReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reduxSagaMonitorOptions = {};
export const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeWithDevTools(composeEnhancers(...enhancers))
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
