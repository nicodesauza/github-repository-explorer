import useGetData from "@/lib/hooks/useGet";
import { useState } from "react";
import type { ListGitHubUser } from "./home.types";
import { API_ENDPOINT } from "@/lib/constants/api-urls";
import type { BaseQueryParams } from "@/lib/types/response.type";
import type { ListUserRepos, UserRepoProps } from "./user-repo.types";

export const useUserRepo = (props: UserRepoProps) => {
  const { userLogin } = props;
  const {
    GITHUB_USER: { REPOS },
  } = API_ENDPOINT;
  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetData<ListUserRepos>([REPOS(userLogin)], REPOS(userLogin), {
    options: {
      enabled: !!userLogin,
    },
    // options: {
    //   initialData: generalListResponse,
    // },
    // normalizer,
  });

  const isEmptyState = data.length <= 0 && !isFetching && !isLoading;
  return {
    data,
    isLoading: isLoading || isFetching,
    isEmptyState,
  };
};
