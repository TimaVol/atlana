import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { octokit } from "../common";
import { RepoTypes } from "../common/types";
import RepoRow from "../components/RepoRow";
import Search from "../components/Search";

import UserInfo from "../components/UserInfo";

export default function User() {
  const [repos, setRepos] = useState<RepoTypes[]>([
    {
      name: "30daysoflaptops.github.io",
      html_url: "https://github.com/mojombo/30daysoflaptops.github.io",
      stargazers_count: 7,
      forks_count: 2,
    },
    {
      name: "30daysoflaptops.github.io",
      html_url: "https://github.com/mojombo/30daysoflaptops.github.io",
      stargazers_count: 7,
      forks_count: 2,
    },
    {
      name: "30daysoflaptops.github.io",
      html_url: "https://github.com/mojombo/30daysoflaptops.github.io",
      stargazers_count: 7,
      forks_count: 2,
    },
  ]);
  const { id } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     try {
  //       const fetchData = async () => {
  //         await octokit
  //           .request("GET /users/{username}/repos", {
  //             username: id,
  //             per_page: 10,
  //           })
  //           .then((res) => setRepos(res.data))
  //           .catch((err) => console.log(err));
  //       };

  //       fetchData();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, [id]);

  return (
    <>
      <h1 className="mainTitle">GitHub Searcher</h1>
      <UserInfo username={id} />
      <Search placeholder="Search for Users" setData="" searchUrl='GET /search/repositories' />

      {repos?.map((repo) => (
        <RepoRow repo={repo} key={Math.random()} />
      ))}
    </>
  );
}
