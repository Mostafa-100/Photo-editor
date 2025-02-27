import ToolButton from "./ToolButton";
import toolsButtonData from "./toolsButtonData";

function Sidebar() {
  return (
    <div className="min-h-[calc(100vh-57px)] w-20 flex flex-col">
      {
        toolsButtonData.map((t) => <ToolButton key={t.keyName} keyName={t.keyName} icon={t.icon} title={t.title} />)
      }
    </div>
  )
}

export default Sidebar;