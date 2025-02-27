import { MousePointerClick, Redo2, Undo2 } from "lucide-react";

function Toolbar() {
  return (
    <div className="flex gap-x-2 border-x px-3 mx-4">
      <MousePointerClick size={29} className="cursor-pointer hover:bg-neutral-200 p-1 rounded-sm" />
      <Undo2 size={29} className="cursor-pointer hover:bg-neutral-200 p-1 rounded-sm" />
      <Redo2 size={29} className="cursor-pointer hover:bg-neutral-200 p-1 rounded-sm" />
    </div>
  )
}

export default Toolbar;