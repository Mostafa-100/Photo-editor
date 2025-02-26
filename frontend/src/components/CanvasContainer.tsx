import Canvas from "./Canvas";
import ProjectPageFooter from "./ProjectPageFooter";
import ToolsBar from "./tools-bar/ToolsBar";

function CanvasContainer() {
  return (
    <div className="relative h-[calc(100vh-57px)] bg-neutral-200 w-full">
      <ToolsBar />
      <div className="flex justify-center mt-4">
        <Canvas />
      </div>
      <ProjectPageFooter className="sticky top-full left-0 w-full" />
    </div>
  )
}

export default CanvasContainer;