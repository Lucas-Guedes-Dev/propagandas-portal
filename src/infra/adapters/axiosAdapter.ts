import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://192.168.0.84:5050/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
