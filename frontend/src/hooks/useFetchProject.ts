import { API_HOST } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

function useFetchProject(id: string | undefined) {
  const query = useQuery({
    queryKey: ["fetchProject"],
    queryFn: async () => {
      const response = await axios.get(`${API_HOST}/api/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      return response.data;
    },
    retry: (f, error) => {
      if (error instanceof AxiosError) {
        return error?.response?.status == 404 ? false : true;
      }
      return true;
    }
  })

  return query;
}

export default useFetchProject;