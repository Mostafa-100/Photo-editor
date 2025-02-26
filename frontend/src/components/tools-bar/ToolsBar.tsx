import ImageTools from "./ImageTools";
import ShapeTools from "./ShapeTools";
import TextTools from "./TextTools";

function ToolsBar() {
  return (
    <nav className="bg-white py-2 px-3 w-full">
      {/* <TextTools /> */}
      {/* <ShapeTools /> */}
      <ImageTools />
    </nav>
  )
}

export default ToolsBar;