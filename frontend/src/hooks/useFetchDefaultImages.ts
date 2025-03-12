import apiClient from "@/api/apiClient";
import { API_HOST } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

function useFetchDefaultImages() {
  const query = useQuery({
    queryKey: ["fetchDefaultImages"],
    queryFn: async function () {
      const response = await apiClient.get(`${API_HOST}/api/default-images`);
      return response.data;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  }
  )

  return query;
}

export default useFetchDefaultImages;