export interface UserTypes {
  avatar_url: string;
  login: string;
  repos_url: string;
  email?: string | null;
  location?: string | null;
  created_at?: string;
  followers?: number;
  following?: number;
  bio?: string | null;
}

export interface RepoTypes {
  name: string;
  forks_count?: number;
  stargazers_count?: number;
  html_url?: string;
}