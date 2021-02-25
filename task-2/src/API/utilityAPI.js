// This is local axios file that we've configured in axiosConfig.js file
// So that, we don't need to set baseURL in our every api file
import axios from './axiosConfig';

// Get IP address
export const getIpAPI = async () => {
  const response = await axios.get(`/tools/myip?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}

// Get API status
export const getAPIStatusAPI = async () => {
  const response = await axios.get(`/api-info?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}

// Get API status
export const getAccountInfoAPI = async () => {
  const response = await axios.get(`/account/profile?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}

// Get API status
export const getHTTPHeaderAPI = async () => {
  const response = await axios.get(`/tools/httpheaders?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}

// Get API status
export const resolveDNSAPI = async (hostname) => {
  const response = await axios.get(`dns/resolve?hostnames=${hostname}&key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}
