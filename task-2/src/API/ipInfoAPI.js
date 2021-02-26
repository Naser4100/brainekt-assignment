// This is local axios file that we've configured in axiosConfig.js file
// So that, we don't need to set baseURL in our every api file
import axios from './axiosConfig';

// This API call will get client's details IP information
export const getIpInfoAPI = async (ip) => {
  const response = await axios.get(`/shodan/host/${ip}?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}
