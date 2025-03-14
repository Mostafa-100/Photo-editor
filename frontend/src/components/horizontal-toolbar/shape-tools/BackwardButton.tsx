import { ArrowDown } from "lucide-react";
import ToolButton from "../ToolButton";
import useBackwardSelectedObject from "@/hooks/horizontal-shape-tools-hooks/useBackwardSelectedObject";

function BackwardButton() {

  const backwardSelectedObject = useBackwardSelectedObject();

  return (
    <ToolButton icon={<ArrowDown className="h-4 w-4" />} onClick={backwardSelectedObject} />
  )
}

export default BackwardButton;