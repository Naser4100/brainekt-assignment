import axios from 'axios'

// Setup base URL
// So that, we don't need to set baseURL in our every api file
axios.defaults.baseURL = 'https://api.shodan.io';


export default axios;