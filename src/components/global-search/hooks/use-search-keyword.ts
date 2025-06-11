import { useSearchHistoryStore } from "@/lib/store/search-store";

export const useSearchKeyword = (keyword: string) => {
  const { getSortedKeywords } = useSearchHistoryStore();
  const suggestions = getSortedKeywords().filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );

  return suggestions;
};
