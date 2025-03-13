import { ArrowUp } from "lucide-react";
import ToolButton from "../ToolButton";
import useForwardSelectedObject from "@/hooks/shape-tools-hooks/useForwardSelectedObject";
function ForwardButton() {

  const forwardSelectedObject = useForwardSelectedObject();

  return (
    <ToolButton icon={<ArrowUp className="h-4 w-4" />} onClick={forwardSelectedObject} />
  )
}

export default ForwardButton;