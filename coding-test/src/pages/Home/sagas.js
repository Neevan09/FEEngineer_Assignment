import { call, put, takeLatest } from 'redux-saga/effects'

import { requestApiData, getOrderDetailsAPI,  receiveApiData } from './actions' 
import { REQUEST_API_DATA, GET_ORDER_DETAILS, RECEIVE_API_DATA} from './constants'
// import {fetchData} from './api'

function* getApiData(action) {
  console.log("Ation", action)
   try { 
      const data = yield call(getOrderDetailsAPI, action);
      
      yield put(receiveApiData(data));
      console.log("action---", action);
      console.log("getApiData---", data);
   } catch (e) {
    console.log(e);  
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
 