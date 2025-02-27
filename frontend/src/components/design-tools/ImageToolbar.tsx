import { Button } from "../ui/button";
import HeaderOfTool from "./HeaderOfTool";

function ImageTools() {
  return (
    <>
      <HeaderOfTool title="Images" description="Add images to your canvas" />
      <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600">Upload Image</Button>
    </>
  )
}

export default ImageTools;