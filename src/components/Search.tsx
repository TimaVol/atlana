import { ChangeEvent } from "react";
import { octokit } from "../common";
import { UserTypes } from "../common/types";

interface SearchTypes {
  placeholder: string;
  setData: (arg: UserTypes) => void;
  searchUrl: string;
}

export default function Search({
  placeholder,
  setData,
  searchUrl,
}: SearchTypes) {
  const searchHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      await octokit
        .request("GET /search/users", { q: event.target.value })
        .then((res) => setData(res?.items));
    } catch (error) {
      console.error(error);
    }

    console.log(event.target.value);
  };
  return (
    <input
      className="search"
      type={"text"}
      placeholder={placeholder}
      onChange={(event) => searchHandler(event)}
    />
  );
}
