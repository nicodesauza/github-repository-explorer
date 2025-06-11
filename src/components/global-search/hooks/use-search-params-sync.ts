import { useSearchParams } from "react-router-dom";

export const useSearchParamsSync = () => {
  const [query, setQuery] = useSearchParams();
  const queryFlag = query.get("q");

  const updateQuery = (keyword: string) => {
    const newQuery = new URLSearchParams();
    newQuery.set("q", keyword);
    setQuery(newQuery);
  };

  return { queryFlag, updateQuery };
};
