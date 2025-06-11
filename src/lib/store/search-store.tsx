import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SearchHistoryStore {
  history: Record<string, number>;
  addKeyword: (keyword: string) => void;
  clearHistory: (keyword?: string) => void;
  getSortedKeywords: () => string[];
}

export const useSearchHistoryStore = create(
  persist<SearchHistoryStore>(
    (set, get) => ({
      history: {},

      addKeyword: (keyword) => {
        const key = keyword.trim();
        if (!key) return;

        const newHistory = {
          ...get().history,
          [key]: Date.now(),
        };

        set({ history: newHistory });
      },

      clearHistory: (keyword) => {
        let newHistory = {
          ...get().history,
        };
        if (keyword) {
          delete newHistory[keyword];
        } else {
          newHistory = {};
        }

        set({ history: newHistory });
      },

      getSortedKeywords: () => {
        const entries = Object.entries(get().history);
        return entries.sort((a, b) => b[1] - a[1]).map(([keyword]) => keyword);
      },
    }),
    {
      name: "search-history-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
