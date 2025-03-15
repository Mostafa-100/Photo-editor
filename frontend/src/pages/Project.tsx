import CanvasContainer from "@/components/CanvasContainer";
import ToolsContainer from "@/components/vertical-toolbar/ToolsContainer";
import Sidebar from "@/components/sidebar/Sidebar";
import ProjectNavbar from "@/components/project-navbar/ProjectNavbar";

function Project() {
  return (
    <>
      <ProjectNavbar />
      <div className="flex">
        <Sidebar />
        <ToolsContainer />
        <CanvasContainer />
      </div>
    </>
  )
}

export default Project;