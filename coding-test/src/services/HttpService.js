import axios from "axios";
import { call, put, all } from "redux-saga/effects";

const createAxiosService = () => {
  return axios.create({
      baseURL: sessionStorage.getItem("APIContext"),
      headers: {
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type, api_key, Authorization",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS"
      }
  });
};

export const HttpService = createAxiosService();


function* doApiCall(method, url, request, successCallback, errorCallback, opts = {}) {
  const { parseResponse = false, timeout = 60000, baseURL, headers, withCredentials } = opts;
  
  const axiosOptions = { baseURL, timeout, headers, withCredentials };
  try {
      let res;
      switch (method) {
          case "GET":
              res = yield call(() => HttpService.get(url, axiosOptions), null);
              break;
          case "POST":
              res = yield call(() => HttpService.post(url, request, axiosOptions), null);
              break;
          case "PUT":
          case "DELETE":
          case "PATCH":
          case "HEAD":
              // TODO: Implement if needed
              break;
          default:
              console.warn("LOG-DEBUG: function*doApiCall -> Incorrect use of doApiCall");
              break;
      }
      const response = parseResponse ? res.data.payload : res;
          if (successCallback) yield successCallback(response);
  } catch (error) {
       if (errorCallback) yield errorCallback(error);
  } 
  
}

/**
* Wrapper method for making GET calls
* @param {String} url Request URL
* @param {Function} [successCallback] Success callback function that can call one or more actions
*                      - Should be a generator function
* @param {Function} [errorCallback] Error callback function that can call one or more actions
*                      - Should be a generator function
* @param {Object} [opts] Additional options for configuring the request
*                      - showLoading -> default: true => Determines if loading shown before and after the request
*                      - parseResponse -> default: false => Determines if response should be extracted from resp.payload.data
*                      - showErrorBanner -> default: true => Determines if an app message with the API error should be displayed
*                      - timeout -> default: 60000ms => Determines after what time the API returns a failure
*                      - baseURL -> default: empty => Allows customization of the baseURL
*/
export function* doGet(url, successCallback, errorCallback, opts) {
  yield doApiCall("GET", url, null, successCallback, errorCallback, opts);
}

/**
* Wrapper method for making POST calls
* @param {String} url Request URL
* @param {Object} request Request body for the API call
* @param {Function} [successCallback] Success callback function that can call one or more actions
*                      - Should be a generator function
* @param {Function} [errorCallback] Error callback function that can call one or more actions
*                      - Should be a generator function
* @param {Object} [opts] Additional options for configuring the request
*                      - showLoading -> default: true => Determines if loading shown before and after the request
*                      - parseResponse -> default: false => Determines if response should be extracted from resp.payload.data
*                      - showErrorBanner -> default: true => Determines if an app message with the API error should be displayed
*                      - timeout -> default: 60000ms => Determines after what time the API returns a failure
*                      - baseURL -> default: empty => Allows customization of the baseURL
*/
export function* doPost(url, request, successCallback, errorCallback, opts = {}) {
  yield doApiCall("POST", url, request, successCallback, errorCallback, opts);
}
