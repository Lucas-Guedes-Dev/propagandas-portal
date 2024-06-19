import axiosInstance from "../../infra/adapters/axiosAdapter";

export const get = async <T>(url: string, params?: object): Promise<T> => {
  const response = await axiosInstance.get<T>(url, { params });
  return response.data;
};

export const post = async <T>(url: string, data: object): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data);
  return response.data;
};
