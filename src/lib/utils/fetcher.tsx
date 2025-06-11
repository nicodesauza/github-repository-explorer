import type { AxiosError } from "axios";

import axiosInstance from "@/lib/config/axios-instance";
import { BASE_API_URL } from "@/lib/constants/common";
import type { FetcherProps } from "@/lib/types/fetcher-props.type";
import type { BaseError } from "@/lib/types/response.type";

const defaultFetcherFn = async <T, TParam = T>(
  options: FetcherProps<T, TParam>
): Promise<T> => {
  const {
    url,
    data,
    normalizer,
    headers,
    method = "get",
    params,
    responseType,
    timeout,
    onUploadProgress,
  } = options || {};
  const instance = axiosInstance();
  return instance<T>({
    baseURL: BASE_API_URL,
    // baseURL: 'https://api.escuelajs.co/api/v1/files/upload',
    data,
    headers,
    method,
    params,
    url,
    responseType,
    onUploadProgress,
    ...(timeout && { timeout }),
  })
    .then((response) => {
      const dataRes = response.data;
      if (typeof normalizer === "function") {
        return normalizer(dataRes as unknown as TParam);
      }
      return dataRes;
    })
    .catch((error: AxiosError<BaseError>) => {
      throw error;
    });
};

export default defaultFetcherFn;
