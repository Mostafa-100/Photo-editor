import CanvasContainer from "@/components/CanvasContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import ToolsSidebar from "@/components/ToolsSidebar.tsx/ToolsSidebar";

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