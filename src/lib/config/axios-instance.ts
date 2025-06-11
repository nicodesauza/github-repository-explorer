import type { AxiosInstance } from "axios";
import axios from "axios";

import { BASE_API_URL } from "@/lib/constants/common";

const axiosInstance = <T>(): AxiosInstance => {
  const axiosClient = axios.create();

  axiosClient.defaults.baseURL = BASE_API_URL;

  axiosClient.defaults.headers.common = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  axiosClient.interceptors.request.use(
    (config) => {
      const newCfg = { ...config };
      return newCfg;
    },
    (error) => Promise.reject(error)
  );

  axiosClient.interceptors.response.use(
    (res) => res,
    (err) => {
      return Promise.reject(err);
    }
  );
  return axiosClient<T>;
};

export default axiosInstance;
