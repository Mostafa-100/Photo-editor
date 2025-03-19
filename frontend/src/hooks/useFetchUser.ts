import { API_HOST } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function useFetchUser() {
  const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);

  const query = useQuery({
    queryKey: ["getUser"],
    queryFn: () => {
      return axios.get(`${API_HOST}/api/user`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      });
    },
    retry: (f, error) => {
      if (error instanceof AxiosError) {
        const status = error.response.status
        return status == 401 ? false : true;
      }
      return true;
    }
  })

  useEffect(() => {
    if (query.isSuccess) setUserIsLoggedIn(true);
    if (query.isError) setUserIsLoggedIn(false);
  }, [query.isSuccess, query.isError])

  return { query, isUserLoggedIn };
}

export default useFetchUser;