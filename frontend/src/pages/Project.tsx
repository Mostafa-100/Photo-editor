import CanvasContainer from "@/components/CanvasContainer";
import ToolsContainer from "@/components/design-tools/ToolsContainer";
import Sidebar from "@/components/sidebar/Sidebar";

function Project() {
  return (
    <div className="flex">
      <Sidebar />
      <ToolsContainer />
      <CanvasContainer />
    </div>
  )
}

export default Project;