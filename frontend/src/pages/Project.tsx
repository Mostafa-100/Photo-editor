import CanvasContainer from "@/components/CanvasContainer";
import ToolsContainer from "@/components/vertical-toolbar/ToolsContainer";
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