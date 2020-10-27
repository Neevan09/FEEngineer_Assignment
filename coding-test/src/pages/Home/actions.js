import { ORDER_URL } from "../../services/UrlMapperService";
import { LOAD_USER_API, GET_ORDER_DETAILS, USER_RESPONSE_RECEIVED} from './constants'
import { HttpService } from '../../services/HttpService';

export const requestApiData = (orderId) => ({
  type: LOAD_USER_API,
  orderId
});

export const getUserDetailsAPI = (orderId) => {
  return HttpService.get(`${ORDER_URL(orderId)}`);
};

