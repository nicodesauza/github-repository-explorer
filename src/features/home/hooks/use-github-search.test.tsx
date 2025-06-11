import { renderHook } from "@testing-library/react";
import { useGitHubSearch } from "./use-github-search";
import useGetData from "@/lib/hooks/useGet";
import { API_ENDPOINT } from "@/lib/constants/api-urls";

jest.mock("@/lib/hooks/useGet", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useGitHubSearch", () => {
  const {
    GITHUB_USER: { SEARCH },
  } = API_ENDPOINT;

  const mockUseGetData = useGetData as jest.Mock;

  beforeEach(() => {
    mockUseGetData.mockReset();
  });

  it("should call useGetData with correct params when q is present", () => {
    const fakeData = {
      data: { items: [{ id: 1, login: "nico" }], total_count: 1 },
      isLoading: false,
      error: null,
    };
    mockUseGetData.mockReturnValue(fakeData);

    const params = { q: "nico", page: 1, per_page: 5 };
    const { result } = renderHook(() => useGitHubSearch(params));

    expect(mockUseGetData).toHaveBeenCalledWith(
      [SEARCH, JSON.stringify(params)],
      SEARCH,
      {
        params,
        options: {
          enabled: true,
        },
      }
    );

    expect(result.current).toEqual(fakeData);
  });

  it("should disable query when q is empty", () => {
    const fakeData = {
      data: null,
      isLoading: false,
      error: null,
    };
    mockUseGetData.mockReturnValue(fakeData);

    const params = { q: "", page: 1, per_page: 5 };
    renderHook(() => useGitHubSearch(params));

    expect(mockUseGetData).toHaveBeenCalledWith(
      [SEARCH, JSON.stringify(params)],
      SEARCH,
      {
        params,
        options: {
          enabled: false,
        },
      }
    );
  });

  it("should disable query when q is empty", () => {
    const mockUseGetData = useGetData as jest.Mock;
    mockUseGetData.mockReturnValue({ data: [], isLoading: false });

    const params = {
      q: "",
      page: 1,
      per_page: 5,
    };

    renderHook(() => useGitHubSearch(params));

    expect(mockUseGetData).toHaveBeenCalledWith(
      ["search/users", JSON.stringify(params)],
      "search/users",
      {
        params,
        options: {
          enabled: false,
        },
      }
    );
  });

  it("should refetch when params change", () => {
    const mockUseGetData = useGetData as jest.Mock;
    mockUseGetData.mockReturnValue({ data: [], isLoading: false });

    const initialParams = {
      q: "nico",
      page: 1,
      per_page: 5,
    };

    const updatedParams = {
      q: "john",
      page: 2,
      per_page: 10,
    };

    const { rerender } = renderHook(({ params }) => useGitHubSearch(params), {
      initialProps: { params: initialParams },
    });

    rerender({ params: updatedParams });

    expect(mockUseGetData).toHaveBeenCalledWith(
      [SEARCH, JSON.stringify(updatedParams)],
      SEARCH,
      {
        params: updatedParams,
        options: { enabled: true },
      }
    );
  });
});
