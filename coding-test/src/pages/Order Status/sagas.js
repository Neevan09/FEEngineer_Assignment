import { call, put, takeLatest } from 'redux-saga/effects'

import { requestApiData, getOrderDetailsAPI,  receiveApiData } from './actions' 
import { REQUEST_API_DATA, GET_ORDER_DETAILS, RECEIVE_API_DATA} from './constants'
// import {fetchData} from './api'

function* getApiData(action) {
   try { 
     debugger
      const apiResponse = yield call(getOrderDetailsAPI, action.orderId);
      const order = { apiResponse };

      console.log("getApiData---apiResponse", apiResponse);
      if(apiResponse){
        // yield put(receiveApiData(apiResponse));
        yield put({ type: RECEIVE_API_DATA, response: apiResponse.data.data });
      }else{
        console.log("getApiData--- Error", apiResponse);
      }
   } catch (e) {
    console.log(e);  
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
 