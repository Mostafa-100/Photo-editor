import { Copy } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import useCopySelectedObject from "@/hooks/shape-tools-hooks/useCopySelectedObject";

function CopyTextButton() {

  const cloneSelectedText = useCopySelectedObject();

  return (
    <Toggle onClick={cloneSelectedText} aria-label="Toggle bold">
      <Copy className="h-4 w-4" />
    </Toggle>
  )
}

export default CopyTextButton;