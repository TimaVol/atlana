import { useEffect, useState } from "react";
import { octokit } from "../common";
import { UserTypes } from "../common/types";
import "../styles/components/UserInfo.scss";

interface UserInfoTypes {
  username?: string;
}

export default function UserInfo({ username }: UserInfoTypes) {
  const [user, setUser] = useState<UserTypes>();
  const [joinDate, setJoinDate] = useState<string>();
  useEffect(() => {
    if (username) {
      try {
        const fetchData = async () => {
          await octokit
            .request("GET /users/{username}", {
              username: username,
            })
            .then((res) => {
              setUser(res.data);
              setJoinDate(new Date(res.data.created_at).toLocaleDateString());
            })
            .catch((err) => console.log(err));
        };

        fetchData();
      } catch (error) {
        console.error(error);
      }
    }
  }, [username]);

  return (
    <div className="userInfo">
      <div className="wrap">
        <img src={user?.avatar_url} alt="avatar" />
        <div className="text">
          <p>{user?.login}</p>
          <p>{user?.email}</p>
          <p>{user?.location}</p>
          <p>{joinDate}</p>
          <p>{user?.followers} Followers</p>
          <p>Following {user?.following}</p>
        </div>
      </div>
      <p className="bio">{user?.bio}</p>
    </div>
  );
}
