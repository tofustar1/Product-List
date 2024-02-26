import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'http://api.valantis.store:40000/'
});

export default axiosApi;