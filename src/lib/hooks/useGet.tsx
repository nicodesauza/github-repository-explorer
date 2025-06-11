import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

// import { PAGE_URLS } from '@/lib/constants/page-urls';
import type { FetchQueryExtras } from "@/lib/types/queries.type";
import type { BaseError } from "@/lib/types/response.type";
import defaultFetcherFn from "@/lib/utils/fetcher";

const useGetData = <T, TParam = T>(
  key: string[],
  url: string,
  extras?: FetchQueryExtras<T, TParam>
) => {
  const { options, params, normalizer } = extras || {};
  const {
    onSuccess,
    onError,
    enabled = true,
    initialData = undefined,
    retry = 2,
    contentType = "application/json",
    responseType = "json",
    refetchOnMount = true,
  } = options || {};

  const handleSuccess = (data: T) => {
    onSuccess?.(data);
  };

  const handleError = (error: AxiosError<BaseError>, variables?: unknown) => {
    if (failureCount >= Number(retry) && onError) {
      onError(error, variables);
    }
  };

  const {
    data,
    error,
    isError,
    isFetching,
    isFetched,
    isLoading,
    refetch,
    failureCount,
  } = useQuery<T, AxiosError<BaseError>>({
    queryKey: key,
    queryFn: () =>
      defaultFetcherFn<T, TParam>({
        headers: {
          Accept: "application/json",
          "Content-Type": contentType,
        },
        responseType,
        method: "get",
        normalizer,
        url,
        params,
      })
        .then((response) => {
          handleSuccess(response);
          return response;
        })
        .catch((err) => {
          handleError(err);
          throw err;
        }),
    enabled,
    initialData,
    retry,
    refetchOnMount,
  });

  return {
    data,
    error,
    isError,
    isFetching,
    isFetched,
    isLoading,
    refetch,
  };
};

export default useGetData;
