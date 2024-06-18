import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://192.168.18.239:5050/",
  timeout: 1000,
});

export default axiosInstance;
