import { Copy } from "lucide-react";
import ToolButton from "../ToolButton";
import useCopySelectedObject from "@/hooks/shape-tools-hooks/useCopySelectedObject";

function CopyButton() {

  const cloneSelectedObject = useCopySelectedObject();

  return (
    <ToolButton icon={<Copy className="h-4 w-4" />} onClick={cloneSelectedObject} />
  )
}

export default CopyButton;