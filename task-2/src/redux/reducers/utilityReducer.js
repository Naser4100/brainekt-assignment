import {
  GET_IP,
  GET_HTTP_HEADERS,
  GET_API_STATUS,
  RESOLVE_DNS,
  REVERSE_DNS,
} from '../types'
const initialState = {
  ip: null,
  headers: null,
  apiStatus: null,
  resolvedIP: {},
  reverseDNS: {},

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
    case RESOLVE_DNS:
      return {
        ...state,
        resolvedIP: action.payload
      }
    case REVERSE_DNS:
      return {
        ...state,
        reverseDNS: action.payload
      }
    default:
      return state;
  }
}

export default utilityReducer;
