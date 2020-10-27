import { USER_RESPONSE_RECEIVED } from "./constants";
import {
    ASYNC_FETCH,
    ASYNC_FETCH_FAILURE,
    ASYNC_FETCH_SUCCESS,
    ERR_RECEIVED,
    PAGE_LOAD_API_ERROR,
    COMPANY_RESPONSE_RECEIVED
  } from './constants';

const asyncCallStatusInit = {
  isFetching: false,
  error: false,
  showErrNotification: false,
  errNotificationMsg: "",
  pageLoadError: false,
  isOrderFailure: false,
};

export const home = (state = {}, action) => {
  switch (action.type) {
    case USER_RESPONSE_RECEIVED:
      return { ...state, ...action.response };
    default:
      return state;
  }
};

export const company = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_RESPONSE_RECEIVED: {
      return { ...state, ...action.response };
    }
    default:
      return state;
  }
};

export const asyncCallStatus = (state = asyncCallStatusInit, action) => {
  switch (action.type) {
    case ASYNC_FETCH:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case ASYNC_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case ASYNC_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case ERR_RECEIVED:
      return {
        ...state,
        showErrNotification: true,
        errNotificationMsg: action.response,
      };
    case PAGE_LOAD_API_ERROR: {
      return { ...state, pageLoadError: true, isFetching: false };
    }
    default:
      return state;
  }
};
