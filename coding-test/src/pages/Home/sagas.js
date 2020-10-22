import { call, put, takeLatest } from 'redux-saga/effects'

import { requestApiData, getOrderDetailsAPI,  receiveApiData } from './actions' 
import { REQUEST_API_DATA, GET_ORDER_DETAILS, RECEIVE_API_DATA} from './constants'
// import {fetchData} from './api'

function* getApiData(action) {
   try { 
      const data = yield call(getOrderDetailsAPI, action.orderId);
      // console.log("orderID---", action.orderId);
      const order = { data };
      yield put(receiveApiData(data));
      // console.log("action---", action);
      console.log("getApiData---", order.data);
   } catch (e) {
    console.log(e);  
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
 