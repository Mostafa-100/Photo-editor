import { Button } from "../ui/button";
import Header from "./Header";

function ImageTools() {
  return (
    <>
      <Header title="Images" description="Add images to your canvas" />
      <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600">Upload Image</Button>
    </>
  )
}

export default ImageTools;