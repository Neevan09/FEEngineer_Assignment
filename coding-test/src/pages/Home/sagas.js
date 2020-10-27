import { call, put, takeLatest } from "redux-saga/effects";
import { getUserDetailsAPI } from "./actions";
import * as USER from './constants';

function* getApiData(action) {
  yield put({ type: USER.ASYNC_FETCH });
  try {
    const apiResponse = yield call(getUserDetailsAPI, action.orderId);
    const userInfo = apiResponse.data.data;
    const companyInfo = apiResponse.data.ad;
    const data = { userInfo, companyInfo };

    if (apiResponse) {
      yield put({ type: USER.USER_RESPONSE_RECEIVED, response: apiResponse.data.data });
      yield put({ type: USER.COMPANY_RESPONSE_RECEIVED, response: companyInfo });
    } else {
      yield put({ type: USER.PAGE_LOAD_API_ERROR });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: USER.PAGE_LOAD_API_ERROR });
  }
  yield put({ type: USER.ASYNC_FETCH_SUCCESS });
}

export default function* mySaga() {
  yield takeLatest(USER.LOAD_USER_API, getApiData);
}
