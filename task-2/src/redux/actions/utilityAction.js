import {
  GET_IP,
  GET_HTTP_HEADERS,
} from '../types'
import { getIpAPI } from '../../API/utilityAPI';

// Action creator
export const getIpAction = () => async(dispatch) => {

  try {
    const response  = await getIpAPI();
    dispatch({ type: GET_IP, payload: response })
  } catch (error) {
    console.log(error);
  }
} 

