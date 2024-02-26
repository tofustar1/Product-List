import axios, {AxiosHeaders, InternalAxiosRequestConfig} from "axios";
import { URL, X_AUTH } from "./constants";

const axiosApi = axios.create({
  baseURL: URL
});
axiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const headers = config.headers as AxiosHeaders;
    headers.set('X-Auth', X_AUTH);
    return config;
  });

export default axiosApi;