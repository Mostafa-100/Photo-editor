import CanvasContainer from "@/components/CanvasContainer";
import ToolsContainer from "@/components/vertical-toolbar/ToolsContainer";
import ProjectSidebar from "@/components/project-sidebar/ProjectSidebar";
import ProjectNavbar from "@/components/project-navbar/ProjectNavbar";

function Project() {
  return (
    <>
      <ProjectNavbar />
      <div className="flex">
        <ProjectSidebar />
        <ToolsContainer />
        <CanvasContainer />
      </div>
    </>
  )
}

export default Project;