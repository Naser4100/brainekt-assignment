import {
  GET_IP,
  GET_API_STATUS,
  GET_HTTP_HEADERS,
  REVERSE_DNS,
  RESOLVE_DNS,
} from '../types'
import {
  getIpAPI,
  getAPIStatusAPI,
  reverseDNSAPI,
  getHTTPHeaderAPI,
  resolveDNSAPI,
} from '../../API/utilityAPI';

// Action creator methods from here
// Get IP action
export const getIpAction = () => async(dispatch) => {

  try {
    const response  = await getIpAPI();
    dispatch({ type: GET_IP, payload: response })
  } catch (error) {
    console.log(error);
  }
}

// Get API status action
export const getAPIStatusAction = () => async(dispatch) => {

  try {
    const response  = await getAPIStatusAPI();
    dispatch({ type: GET_API_STATUS, payload: response })
  } catch (error) {
    console.log(error);
  }
} 

// Get account info action
export const reverseDNSAction = (ip) => async(dispatch) => {

  try {
    const response  = await reverseDNSAPI(ip);
    dispatch({ type: REVERSE_DNS, payload: response })
  } catch (error) {
    console.log(error);
  }
} 

// Get HTTP header
export const getHTTPHeaderAction = () => async(dispatch) => {

  try {
    const response  = await getHTTPHeaderAPI();
    dispatch({ type: GET_HTTP_HEADERS, payload: response })
  } catch (error) {
    console.log(error);
  }
} 

// Resolve DNS
export const resolveDNSAction = (hostname) => async(dispatch) => {

  try {
    const response  = await resolveDNSAPI(hostname);
    dispatch({ type: RESOLVE_DNS, payload: response })
  } catch (error) {
    console.log(error);
  }
} 

