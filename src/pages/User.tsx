import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { octokit } from "../common";
import { RepoTypes } from "../common/types";
import RepoRow from "../components/RepoRow";
import Search from "../components/Search";

import UserInfo from "../components/UserInfo";

export default function User() {
  const [repos, setRepos] = useState<RepoTypes[]>();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      try {
        const fetchData = async () => {
          await octokit
            .request("GET /users/{username}/repos", {
              username: id,
              per_page: 10,
            })
            .then((res) => setRepos(res.data))
            .catch((err) => console.log(err));
        };

        fetchData();
      } catch (error) {
        console.error(error);
      }
    }
  }, [id]);

  return (
    <>
      <h1 className="mainTitle">GitHub Searcher</h1>
      <UserInfo username={id} />
      <Search
        placeholder="Search for User's Repositories"
        setData={setRepos}
        searchUrl="GET /search/repositories"
        searchKeywords={`user:${id} in:name`}
      />

      {repos?.map((repo) => (
        <RepoRow repo={repo} key={Math.random()} />
      ))}
    </>
  );
}
