import { RepoTypes } from "../common/types";
interface RepoRowTypes {
  repo: RepoTypes;
}
export default function RepoRow({ repo }: RepoRowTypes) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="repoRow"
    >
      <p>{repo.name}</p>

      <div>
        <p>{repo.forks_count} Forks</p>
        <p>{repo.stargazers_count} Stars</p>
      </div>
    </a>
  );
}
