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

// This API method will return reverse DNS of IP we will be pass in here
export const reverseDNSAPI = async (ip) => {
  const response = await axios.get(`/dns/reverse?ips=${ip}&key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}

// Get HTTP header 
export const getHTTPHeaderAPI = async () => {
  const response = await axios.get(`/tools/httpheaders?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}

// This will resolve DNS of passed hostname to this method
export const resolveDNSAPI = async (hostname) => {
  const response = await axios.get(`dns/resolve?hostnames=${hostname}&key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}
