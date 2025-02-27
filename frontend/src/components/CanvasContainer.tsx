import CanvasPlace from "./CanvasPlace";
import ProjectPageFooter from "./ProjectPageFooter";
import DesignToolsBar from "./editing-tools-bar/DesignToolsBar";

function CanvasContainer() {
  return (
    <div className="w-full">
      <DesignToolsBar />
      <div className="h-[calc(100%-86px)] grid place-items-center bg-neutral-200">
        <CanvasPlace />
      </div>
      <ProjectPageFooter />
    </div>
  )
}

export default CanvasContainer;