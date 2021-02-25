import {
  GET_IP,
  GET_HTTP_HEADERS,
  GET_API_STATUS,
  GET_ACCOUNT_INFO,
  RESOLVE_DNS,
} from '../types'
const initialState = {
  ip: null,
  headers: null,
  apiStatus: null,
  accountInfo: null,
  resolvedIP: {},

};
const utilityReducer = (state = initialState, action) => {


  switch(action.type){
    case GET_IP:
      return {
        ...state,
        ip:  action.payload
      }
    case GET_HTTP_HEADERS:
      return {
        ...state,
        headers: action.payload
      }
    case GET_API_STATUS:
      return {
        ...state,
        apiStatus: action.payload
      }
    case GET_ACCOUNT_INFO:
      return {
        ...state,
        accountInfo: action.payload
      }
    case RESOLVE_DNS:
      return {
        ...state,
        resolvedIP: action.payload
      }
    default:
      return state;
  }
}

export default utilityReducer;
