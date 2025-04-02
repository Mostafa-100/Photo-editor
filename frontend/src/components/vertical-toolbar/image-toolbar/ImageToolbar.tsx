import HeaderOfTool from "../HeaderOfTool";
import ImageList from "./ImageList";

const data = [
  { name: "NRQV-hBF10M-unsplash.jpg", owner_fullname: "bailey zindel" },
  { name: "d4feocYfzAM-unsplash.jpg", owner_fullname: "damiano baschiera" },
  { name: "h5wvMCdOV3w-unsplash.jpg", owner_fullname: "bailey zindel" },
  { name: "EwKXn5CapA4-unsplash.jpg", owner_fullname: "bailey zindel" },
  { name: "mWRR1xj95hg-unsplash.jpg", owner_fullname: "bailey zindel" },
]

function ImageToolbar() {

  return (
    <>
      <HeaderOfTool title="Images" description="Add images to your canvas" />
      <ImageList data={data} />
    </>
  )
}

export default ImageToolbar;