import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './Reducers'
import mySaga from './pages/Home/sagas'
 
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export default createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mySaga)