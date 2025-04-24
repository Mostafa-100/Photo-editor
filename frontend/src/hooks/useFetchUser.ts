import { API_HOST } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

function useFetchUser() {
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
        return error?.response?.status == 401 ? false : true;
      }
      return true;
    }
  })

  return query;
}

export default useFetchUser;