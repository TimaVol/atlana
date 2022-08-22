import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { octokit } from "../common";
import { UserTypes } from "../common/types";

interface UserRowTypes {
  user: UserTypes;
}

export default function UserRow({ user }: UserRowTypes) {
  const [reposCount, setReposCount] = useState(0);

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       try {
  //         const res = await octokit.request("GET /users/{username}", {
  //           username: user.login,
  //         });
  //         setReposCount(res.data.public_repos);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [user.login]);

  return (
    <Link to={"/" + user.login} className="userRow">
      <>
        <div>
          <img src={user.avatar_url} alt="avatar" />
          {user.login}
        </div>

        <p>Repo: {reposCount}</p>
      </>
    </Link>
  );
}
