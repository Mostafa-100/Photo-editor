import { useSelector } from "react-redux";
import ImageTools from "./image-tools/ImageTools";
import ShapeTools from "./shape-tools/ShapeTools";
import TextTools from "./text-tools/TextTools";
import { RootState } from "@/redux/store";

function SelectedTools() {
  const {
    areTextToolsVisible,
    areShapeToolsVisible,
    areImageToolsVisible
  } = useSelector((state: RootState) => state.horizontalToolbar)

  return (
    <>
      {areTextToolsVisible && <TextTools />}
      {areShapeToolsVisible && <ShapeTools />}
      {areImageToolsVisible && <ImageTools />}
    </>
  )
}

export default SelectedTools;