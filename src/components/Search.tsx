import { ChangeEvent } from "react";
import { octokit } from "../common";
import "../styles/components/Search.scss";
interface SearchTypes {
  placeholder: string;
  setData: (arg: any) => void;
  searchUrl: string;
  searchKeywords: string;
}

export default function Search({
  placeholder,
  setData,
  searchUrl,
  searchKeywords,
}: SearchTypes) {
  const searchHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      await octokit
        .request(searchUrl, { q: `${event.target.value} ${searchKeywords}` })
        .then((res) => setData(res.data.items));
    } catch (error) {
      console.error(error);
    }
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
