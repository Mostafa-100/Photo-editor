import { AlignJustify, ArrowDown, ArrowUp, Copy, Layers, Paintbrush, Trash } from "lucide-react";
import { Button } from "../ui/button";

function ShapeTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <input type="color" className="size-7 rounded-sm" />
      <input type="color" className="size-7 rounded-sm" />
      <Button variant="ghost">
        <Paintbrush className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <ArrowUp className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <ArrowDown className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <Layers className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <Copy className="h-4 w-4" />
      </Button>
      <Button variant="ghost">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default ShapeTools;