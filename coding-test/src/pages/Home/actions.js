import { ORDER_URL } from "../../services/UrlMapperService";
import { REQUEST_API_DATA, GET_ORDER_DETAILS, RECEIVE_API_DATA} from './constants'

export const requestApiData = (orderId) => ({
  type: REQUEST_API_DATA,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  orderId
});

export const getOrderDetailsAPI = orderId => {
  const postData = {
    type: GET_ORDER_DETAILS,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const response =  fetch(`${ORDER_URL(orderId)}`, postData).then(res => res.json());
  console.log("response : ",response);
  return response;
};

export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data: data });
