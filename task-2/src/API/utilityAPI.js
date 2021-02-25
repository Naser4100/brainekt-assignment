// This is local axios file that we've configured in axiosConfig.js file
// So that, we don't need to set baseURL in our every api file
import axios from './axiosConfig';

export const getIpAPI = async () => {
  const response = await axios.get(`/tools/myip?key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
}
