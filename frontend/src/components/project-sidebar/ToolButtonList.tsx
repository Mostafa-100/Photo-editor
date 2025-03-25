import ToolButton from "./ToolButton";
import toolButtonData from "./toolButtonData";

function ToolButtonList() {
  return (
    <>
      {
        toolButtonData.map((t) => <ToolButton key={t.keyName} keyName={t.keyName} icon={t.icon} title={t.title} />)
      }
    </>
  )
}

export default ToolButtonList;