import type { AxiosInstance } from "axios";
import axios from "axios";

import { BASE_API_URL } from "@/lib/constants/common";

const axiosInstance = <T>(): AxiosInstance => {
  const axiosClient = axios.create();

  // axiosClient.defaults.withCredentials = true;
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
      // const originalConfig = err.config;
      // if (originalConfig.url !== PAGE_URLS.AUTH.LOGIN && err.response) {
      //   // Access Token was expired
      //   if (
      //     err.response.status === HttpStatusCode.Unauthorized &&
      //     !originalConfig.retry
      //   ) {
      //     originalConfig.retry = true;
      //     return Promise.reject(err);
      //   }
      // }

      return Promise.reject(err);
    }
  );
  return axiosClient<T>;
};

export default axiosInstance;
