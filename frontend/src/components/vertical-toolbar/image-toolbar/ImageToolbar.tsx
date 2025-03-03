import { API_HOST } from "@/lib/constants";
import { Button } from "../../ui/button";
import HeaderOfTool from "../HeaderOfTool";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/api/apiClient";
import { Loader } from "lucide-react";
import Image from "./Image";

type DataProps = {
  id: string,
  path: string;
  owner_fullname: string;
}

function ImageToolbar() {

  const { data, isLoading } = useQuery({
    queryKey: ["fetchDefaultImages"],
    queryFn: async function () {
      const response = await apiClient.get(`${API_HOST}/api/default-images`);
      return response.data;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  }
  )

  return (
    <>
      <HeaderOfTool title="Images" description="Add images to your canvas" />
      <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer">Upload Image</Button>
      {
        isLoading ? <Loader className="animate-spin mt-3 mx-auto" /> :
          <div className="grid gap-2 grid-cols-2 mt-3">
            {data?.map((i: DataProps) => <Image key={i.id} src={i.path} owner={i.owner_fullname} />)}
          </div>
      }
    </>
  )
}

export default ImageToolbar;