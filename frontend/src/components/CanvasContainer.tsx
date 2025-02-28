import CanvasPlace from "./CanvasPlace";
import ProjectPageFooter from "./ProjectPageFooter";
import HorizontalToolbar from "./horizontal-toolbar/HorizontalToolbar";

function CanvasContainer() {
  return (
    <div className="w-full">
      <HorizontalToolbar />
      <div className="h-[calc(100%-86px)] py-2 overflow-y-auto grid place-items-center bg-neutral-200">
        <CanvasPlace />
      </div>
      <ProjectPageFooter />
    </div>
  )
}

export default CanvasContainer;