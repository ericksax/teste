import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api
      .get("user")
      .then(({ data }) => setUsers(data.users))
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  return { users };
}
