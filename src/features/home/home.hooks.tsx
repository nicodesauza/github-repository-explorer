import type { BaseQueryParams } from "@/lib/types/response.type";
import { useEffect, useRef, useState } from "react";
import { useSearchParamsSync } from "./hooks/use-search-params-sync";
import { useSearchKeyword } from "./hooks/use-search-keyword";
import { useGitHubSearch } from "./hooks/use-github-search";
import { useSearchHistoryStore } from "@/lib/store/search-store";

export const useHome = () => {
  const [keyword, setKeyword] = useState("");
  const [params, setParams] = useState<BaseQueryParams>({
    q: "",
    page: 1,
    per_page: 5,
  });
  const searchRef = useRef<HTMLInputElement>(null);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const { queryFlag, updateQuery } = useSearchParamsSync();
  const suggestions = useSearchKeyword(keyword);
  const {
    data: response,
    isLoading,
    isFetching,
    isError,
  } = useGitHubSearch(params);
  const { addKeyword, clearHistory } = useSearchHistoryStore();

  useEffect(() => {
    if (queryFlag) {
      handleSearch(queryFlag);
    }
  }, [queryFlag]);

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
    setParams((prev) => ({ ...prev, q: keyword }));
    addKeyword(keyword);
    searchRef.current?.blur?.();
  };

  const onClickSearch = (keyword: string) => updateQuery(keyword);

  return {
    searchResult: response?.items ?? [],
    keyword,
    setKeyword,
    handleSearch,
    isLoading: isLoading || isFetching,
    suggestions,
    showSuggestion,
    setShowSuggestion,
    onClickSearch,
    searchRef,
    clearHistory,
    isList: !!queryFlag || queryFlag === "",
    isError,
  };
};
