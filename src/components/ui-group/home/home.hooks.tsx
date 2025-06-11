import useGetData from "@/lib/hooks/useGet";
import { useEffect, useRef, useState } from "react";
import type { ListGitHubUser } from "./home.types";
import { API_ENDPOINT } from "@/lib/constants/api-urls";
import type { BaseQueryParams } from "@/lib/types/response.type";
import { useSearchHistoryStore } from "@/lib/store/search-store";

export const useHome = () => {
  const {
    GITHUB_USER: { SEARCH },
  } = API_ENDPOINT;
  const { addKeyword, clearHistory, getSortedKeywords, history } =
    useSearchHistoryStore();

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [params, setParams] = useState<BaseQueryParams>({
    q: "",
    page: 1,
    per_page: 5,
  });

  useEffect(() => {
    handleChangeKeyword(keyword);
    // const sortedKeywords = getSortedKeywords();
    // setSuggestions(sortedKeywords);
    // console.log("kok engga");
  }, [history, getSortedKeywords, keyword]);

  const searchRef = useRef<HTMLInputElement>(null);

  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetData<ListGitHubUser>([SEARCH, JSON.stringify(params)], SEARCH, {
    params,
    options: {
      enabled: !!params.q,
    },
    // options: {
    //   initialData: generalListResponse,
    // },
    // normalizer,
  });

  const handleChangeKeyword = (keyword: string) => {
    setKeyword(keyword);
    const sortedKeywords = getSortedKeywords();
    setSuggestions(
      sortedKeywords.filter((item) =>
        item.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
    setParams((prev) => ({ ...prev, q: keyword }));
    addKeyword(keyword);
    searchRef.current?.blur?.();
  };

  return {
    searchResult: response?.items ?? [],
    keyword,
    setKeyword,
    handleSearch,
    isLoading: isLoading || isFetching,
    suggestions,
    showSuggestion,
    setShowSuggestion,
    searchRef,
    clearHistory,
  };
};
