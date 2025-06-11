// src/features/home/home.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./home";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

import * as githubSearchHook from "./hooks/use-github-search";
jest.mock("./hooks/use-github-search");

const mockedUseGitHubSearch = githubSearchHook.useGitHubSearch as jest.Mock;

const renderHome = () => {
  const client = new QueryClient();
  return render(
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("Home page", () => {
  it("renders search input", () => {
    mockedUseGitHubSearch.mockImplementation(() => ({
      data: {
        items: [
          {
            id: 1,
            login: "jhon-snow",
            node_id: "",
            avatar_url: "",
          },
        ],
      },
      isLoading: false,
      isError: false,
    }));
    renderHome();
    expect(screen.getByPlaceholderText(/Search user/i)).toBeInTheDocument();
  });

  it("displays loading spinner when loading", () => {
    mockedUseGitHubSearch.mockImplementation(() => ({
      data: [],
      isLoading: true,
      isError: false,
    }));

    renderHome();
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("displays GitHub results", async () => {
    mockedUseGitHubSearch.mockImplementation(() => ({
      data: {
        items: [
          {
            id: 1,
            login: "jhon-snow",
            node_id: "",
            avatar_url: "",
          },
        ],
      },
      isLoading: false,
      isError: false,
    }));
    renderHome();
    await waitFor(() => {
      expect(screen.getByText("jhon-snow")).toBeInTheDocument();
    });
  });

  it("displays error message when error", async () => {
    mockedUseGitHubSearch.mockImplementation(() => ({
      data: [],
      isLoading: false,
      isError: true,
    }));

    renderHome();
    expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
  });

  it("can type in search input", () => {
    renderHome();
    const input = screen.getByPlaceholderText(
      /Search user/i
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "react" } });
    expect(input).toHaveValue("react");
  });

  it("refetches on search submit", () => {
    renderHome();
    const input = screen.getByPlaceholderText(/Search user/i);
    fireEvent.change(input, { target: { value: "nextjs" } });

    const searchBtn = screen.getByTestId("submit-search");
    fireEvent.mouseDown(searchBtn);

    expect(mockedUseGitHubSearch).toHaveBeenCalled();
  });
});
