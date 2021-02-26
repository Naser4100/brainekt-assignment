import {
  GET_IP_INFO,
} from '../types'
import { getIpInfoAPI } from '../../API/ipInfoAPI';

// Action creator
export const getIPInfoAction = (ip) => async(dispatch) => {
  try {
    const  response  = await getIpInfoAPI(ip);
    dispatch({ type: GET_IP_INFO, payload: response });
  } catch (error) {
    console.log(error);
  }
} 

