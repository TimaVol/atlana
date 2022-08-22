import { useEffect, useState } from "react";
import UserRow from "../components/UserRow";
import { UserTypes } from "../common/types";
import { octokit } from "../common";
import Search from "../components/Search";

export default function Users() {
  const [users, setUsers] = useState<UserTypes[]>();
  const query = "GET /users";
  useEffect(() => {
    try {
      const fetchData = async () => {
        await octokit
          .request(query, {
            per_page: 10,
          })
          .then((res) => setUsers(res.data))
          .catch((err) => console.log(err));
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [query]);

  return (
    <>
      <h1 className="mainTitle">GitHub Searcher</h1>
      <Search
        placeholder="Search for Users"
        setData={setUsers}
        searchUrl="GET /search/users"
        searchKeywords="type:user in:login"
      />
      {users?.map((user) => (
        <UserRow key={Math.random()} user={user} />
      ))}
    </>
  );
}
