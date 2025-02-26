import { AlignCenter, AlignLeft, AlignRight, ArrowDown, ArrowUp, Bold, Copy, Italic, Layers, Minus, Plus, Strikethrough, Trash, Underline } from "lucide-react";
import { Toggle } from "../ui/toggle";
import FontSelect from "./FontSelect";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function TextTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <input type="color" className="size-7 rounded-sm" />
      <FontSelect />
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <AlignRight className="h-4 w-4" />
      </Toggle>
      <Button variant="ghost">
        <Minus className="h-4 w-4" />
      </Button>
      <Input type="number" defaultValue="16" className="size-9 px-1 text-center" />
      <Button variant="ghost">
        <Plus className="h-4 w-4" />
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

export default TextTools;