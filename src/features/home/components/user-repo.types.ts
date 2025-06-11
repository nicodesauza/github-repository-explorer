export type UserRepoProps = {
  userLogin: string;
};

export type UserRepos = {
  stargazers_count: number;
  watchers_count: number;
  full_name: string;
  visibility: string;
  description: string;
  language: string;
  id: string;
  updated_at: string;
};
export type ListUserRepos = UserRepos[];
