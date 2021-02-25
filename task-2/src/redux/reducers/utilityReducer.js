import {
  GET_IP,
  GET_HTTP_HEADERS
} from '../types'
const initialState = {
  ip: null,
  headers: null,

};
const utilityReducer = (state = initialState, action) => {


  switch(action.type){
    case GET_IP:
      return {
        ip:  action.payload
      }
    case GET_HTTP_HEADERS:
      return {
        ...state,
        headers: action.payload
      }
    default:
      return state;
  }
}

export default utilityReducer;
