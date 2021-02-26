import { GET_IP_INFO } from '../types';

const initialState = {
  ipInfo: null,
};

const ipInfoReducer = (state = initialState, action) => {

  switch(action.type){
    case GET_IP_INFO:
      return {
        ...state,
        ipInfo:  action.payload
      }
    default:
      return state;
  }
}

export default ipInfoReducer;
