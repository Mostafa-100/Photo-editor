import { JSX } from "react";
import { Toggle } from "../ui/toggle";

type OneShapeToolProps = {
  icon: JSX.Element;
}

function ToolToggle({ icon }: OneShapeToolProps) {
  return (
    <Toggle aria-label="Toggle bold">
      {icon}
    </Toggle>
  )
}

export default ToolToggle;