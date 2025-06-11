import type { BaseQueryParams } from "@/lib/types/response.type";
import { useEffect, useRef, useState } from "react";
import { useSearchParamsSync } from "./hooks/use-search-params-sync";
import { useSearchKeyword } from "./hooks/use-search-keyword";
import { useGitHubSearch } from "./hooks/use-github-search";
import { useSearchHistoryStore } from "@/lib/store/search-store";
import type { GlobalSearchProps } from "./global-search.types";

export const useGlobalSearch = (props: GlobalSearchProps) => {
  const [keyword, setKeyword] = useState("");
  const [params, setParams] = useState<BaseQueryParams>({
    q: "",
    page: 1,
    per_page: 5,
  });
  const searchRef = useRef<HTMLInputElement>(null);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const { queryFlag } = useSearchParamsSync();
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

  const onClickSearch = (keyword: string) => {
    props.onSearch?.(keyword);
  };

  const isEmptyState =
    (response?.items?.length ?? 0) <= 0 && !isFetching && !isLoading;

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
    isError,
    isEmptyState,
  };
};
