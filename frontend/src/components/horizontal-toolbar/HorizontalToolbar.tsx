import { useSelector } from "react-redux";
import ImageTools from "./image-tools/ImageTools";
import ShapeTools from "./shape-tools/ShapeTools";
import TextTools from "./text-tools/TextTools";
import { RootState } from "@/redux/store";

function HorizontalToolbar() {

  const {
    areTextToolsVisible,
    areShapeToolsVisible,
    areImageToolsVisible
  } = useSelector((state: RootState) => state.horizontalToolbar)

  return (
    <nav className="bg-white py-2 px-3 w-full h-[52px]">
      {areTextToolsVisible && <TextTools />}
      {areShapeToolsVisible && <ShapeTools />}
      {areImageToolsVisible && <ImageTools />}
    </nav>
  )
}

export default HorizontalToolbar;