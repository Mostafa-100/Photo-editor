import ImageTools from "./ImageTools";
import ShapeTools from "./ShapeTools";
import TextTools from "./TextTools";

function DesignToolsBar() {
  return (
    <nav className="bg-white py-2 px-3 w-full height-[53px]">
      <TextTools />
      {/* <ShapeTools /> */}
      {/* <ImageTools /> */}
    </nav>
  )
}

export default DesignToolsBar;