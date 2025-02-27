import CanvasContainer from "@/components/CanvasContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import ToolsSidebar from "@/components/tools-sidebar/ToolsSidebar";

function Project() {
  return (
    <div className="flex">
      <Sidebar />
      <ToolsSidebar />
      <CanvasContainer />
    </div>
  )
}

export default Project;