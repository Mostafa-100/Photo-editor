import Canvas from "./Canvas";
import ProjectPageFooter from "./ProjectPageFooter";

function CanvasContainer() {
  return (
    <div className="relative h-[calc(100vh-57px)] bg-neutral-200 w-full">
      <div className="bg-white h-10 w-full"></div>
      <div className="flex justify-center mt-4">
        <Canvas />
      </div>
      <ProjectPageFooter className="sticky top-full left-0 w-full" />
    </div>
  )
}

export default CanvasContainer;