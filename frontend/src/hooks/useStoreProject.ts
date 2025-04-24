import { API_HOST } from "@/lib/constants";
import { ProjectType } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function useStoreProject() {
  const mutation = useMutation({
    mutationFn: (data: ProjectType) => {
      return axios.post(`${API_HOST}/api/projects`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
    }
  })

  return mutation;
}

export default useStoreProject;