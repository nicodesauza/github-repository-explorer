import { renderHook } from "@testing-library/react";
import { useSearchKeyword } from "./use-search-keyword";

// mock useSearchHistoryStore
jest.mock("@/lib/store/search-store", () => ({
  useSearchHistoryStore: jest.fn(),
}));

describe("useSearchKeyword", () => {
  const mockGetSortedKeywords = jest.fn();
  const mockUseSearchHistoryStore =
    //eslint-disable-next-line
    require("@/lib/store/search-store").useSearchHistoryStore;

  beforeEach(() => {
    mockUseSearchHistoryStore.mockReturnValue({
      getSortedKeywords: mockGetSortedKeywords,
    });
  });

  it("should call getSortedKeywords and return filtered keywords", () => {
    mockGetSortedKeywords.mockReturnValue(["Nico", "John", "Nicky"]);

    const { result } = renderHook(() => useSearchKeyword("nic"));

    expect(mockGetSortedKeywords).toHaveBeenCalled();
    expect(result.current).toEqual(["Nico", "Nicky"]);
  });

  it("should be case-insensitive", () => {
    mockGetSortedKeywords.mockReturnValue(["banana", "Apple", "aPplejuice"]);

    const { result } = renderHook(() => useSearchKeyword("APPLE"));

    expect(result.current).toEqual(["Apple", "aPplejuice"]);
  });

  it("should return empty array if no match", () => {
    mockGetSortedKeywords.mockReturnValue(["cat", "dog", "bird"]);

    const { result } = renderHook(() => useSearchKeyword("zebra"));

    expect(result.current).toEqual([]);
  });

  it("should return all if keyword is empty string", () => {
    mockGetSortedKeywords.mockReturnValue(["x", "y", "z"]);

    const { result } = renderHook(() => useSearchKeyword(""));

    expect(result.current).toEqual(["x", "y", "z"]);
  });
});
