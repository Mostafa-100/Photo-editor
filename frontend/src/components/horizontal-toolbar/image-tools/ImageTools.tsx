import { ArrowDown, ArrowUp, Blend, Copy, Layers, Paintbrush, ScanLine, Trash } from "lucide-react";
import ToolButton from "../ToolButton";

function ImageTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <input type="color" className="size-7 rounded-sm" />
      <input type="color" className="size-7 rounded-sm" />
      <ToolButton icon={<Paintbrush className="h-4 w-4" />} />
      <ToolButton icon={<Blend className="h-4 w-4" />} />
      <ToolButton icon={<ScanLine className="h-4 w-4" />} />
      <ToolButton icon={<ArrowUp className="h-4 w-4" />} />
      <ToolButton icon={<ArrowDown className="h-4 w-4" />} />
      <ToolButton icon={<Layers className="h-4 w-4" />} />
      <ToolButton icon={<Copy className="h-4 w-4" />} />
      <ToolButton icon={<Trash className="h-4 w-4" />} />
    </div>
  )
}

export default ImageTools;