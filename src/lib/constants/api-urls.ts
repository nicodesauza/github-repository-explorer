export const API_ENDPOINT = {
  GITHUB_USER: {
    ALL: "users",
    SEARCH: "search/users",
    REPOS: (userLogin: string) => `users/${userLogin}/repos`,
  },
} as const;
