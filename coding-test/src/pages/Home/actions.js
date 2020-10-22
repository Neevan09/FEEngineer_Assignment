import { ORDER_URL } from "../../services/UrlMapperService";
import { REQUEST_API_DATA, GET_ORDER_DETAILS, RECEIVE_API_DATA} from './constants'

export const requestApiData = () => ({
  type: REQUEST_API_DATA,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getOrderDetailsAPI = async () => {
  const postData = {
    type: GET_ORDER_DETAILS,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${ORDER_URL}`, postData);
  const data = await response.json();
  return data;
};

export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data: data });
