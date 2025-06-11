import { renderHook, act } from "@testing-library/react";
import { useSearchParamsSync } from "./use-search-params-sync";

// Mock useSearchParams dari react-router-dom
const mockSetQuery = jest.fn();
const mockGet = jest.fn();

jest.mock("react-router-dom", () => ({
  useSearchParams: () => [{ get: mockGet }, mockSetQuery],
}));

describe("useSearchParamsSync", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should read query parameter 'q'", () => {
    mockGet.mockReturnValue("nico");

    const { result } = renderHook(() => useSearchParamsSync());

    expect(result.current.queryFlag).toBe("nico");
    expect(mockGet).toHaveBeenCalledWith("q");
  });

  it("should call setQuery with updated q", () => {
    const { result } = renderHook(() => useSearchParamsSync());

    act(() => {
      result.current.updateQuery("john");
    });

    expect(mockSetQuery).toHaveBeenCalledTimes(1);

    const calledWith = mockSetQuery.mock.calls[0][0];
    expect(calledWith.get("q")).toBe("john");
  });
});
