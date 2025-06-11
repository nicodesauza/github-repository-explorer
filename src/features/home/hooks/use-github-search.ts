import { API_ENDPOINT } from "@/lib/constants/api-urls";
import useGetData from "@/lib/hooks/useGet";
import type { BaseQueryParams } from "@/lib/types/response.type";
import type { ListGitHubUser } from "../home.types";

export const useGitHubSearch = (params: BaseQueryParams) => {
  const {
    GITHUB_USER: { SEARCH },
  } = API_ENDPOINT;

  return useGetData<ListGitHubUser>([SEARCH, JSON.stringify(params)], SEARCH, {
    params,
    options: {
      enabled: !!params.q,
    },
  });
};
