import HeaderOfTool from "../HeaderOfTool";
import { Loader } from "lucide-react";
import useFetchDefaultImages from "@/hooks/useFetchDefaultImages";
import ImageList from "./ImageList";
import UploadButton from "./UploadButton";

function ImageToolbar() {

  const { data, isLoading } = useFetchDefaultImages();

  return (
    <>
      <HeaderOfTool title="Images" description="Add images to your canvas" />
      <UploadButton />
      {
        isLoading
          ? <Loader className="animate-spin mt-3 mx-auto" />
          : <ImageList data={data} />
      }
    </>
  )
}

export default ImageToolbar;