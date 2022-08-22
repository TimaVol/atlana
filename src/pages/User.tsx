import { useParams } from "react-router-dom";

export default function User() {
  let { id } = useParams();

  return <>User: {id}</>;
}
