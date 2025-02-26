import CanvasContainer from "@/components/CanvasContainer";
import Sidebar from "@/components/sidebar/Sidebar";

function Project() {
  return (
    <div className="flex">
      <Sidebar />
      <CanvasContainer />
    </div>
  )
}

export default Project;