import { AlignCenter, AlignLeft, AlignRight, ArrowDown, ArrowUp, Bold, Copy, Italic, Layers, Minus, Plus, Strikethrough, Trash, Underline } from "lucide-react";

import { Input } from "../../ui/input";
import ToolToggle from "../ToolToggle";
import ToolButton from "../ToolButton";
import FontSelect from "./FontSelect";

function TextTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <input type="color" className="w-[28px] h-[31px] custom-color-input" />
      <FontSelect />
      <ToolToggle icon={<Bold className="h-4 w-4" />} />
      <ToolToggle icon={<Italic className="h-4 w-4" />} />
      <ToolToggle icon={<Underline className="h-4 w-4" />} />
      <ToolToggle icon={<Strikethrough className="h-4 w-4" />} />
      <ToolToggle icon={<AlignLeft className="h-4 w-4" />} />
      <ToolToggle icon={<AlignCenter className="h-4 w-4" />} />
      <ToolToggle icon={<AlignRight className="h-4 w-4" />} />

      <ToolButton icon={<Minus className="h-4 w-4" />} />
      <Input type="number" defaultValue="16" className="size-9 px-1 text-center" />
      <ToolButton icon={<Plus className="h-4 w-4" />} />

      <ToolButton icon={<ArrowUp className="h-4 w-4" />} />
      <ToolButton icon={<ArrowDown className="h-4 w-4" />} />
      <ToolButton icon={<Layers className="h-4 w-4" />} />
      <ToolButton icon={<Copy className="h-4 w-4" />} />
      <ToolButton icon={<Trash className="h-4 w-4" />} />
    </div>
  )
}

export default TextTools;