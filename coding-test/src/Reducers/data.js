import { RECEIVE_API_DATA } from "../pages/Home/constants";

export default (state = [], { type, data }) => {
  console.log("type :", data)
  switch (type) {
    case RECEIVE_API_DATA:
      return { ...state, data };
    default:
      return state;
  }
};
