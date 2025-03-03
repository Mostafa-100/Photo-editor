import { ArrowUp, Copy, Layers, Trash } from "lucide-react";
import ToolButton from "../ToolButton";
import ChangeBackgroundColorButton from "./ChangeBackroundColorButton";
import ChangeStrokeColorButton from "./ChangeBorderColorButton";
import SetStrokeButton from "./SetStrokeButton";
import BackwardButton from "./BackwardButton";
import ForwardButton from "./ForwardButton";
import DeleteButton from "./DeleteButton";

function ShapeTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <ChangeBackgroundColorButton />
      <ChangeStrokeColorButton />
      <SetStrokeButton />
      <ForwardButton />
      <BackwardButton />
      <ToolButton icon={<Layers className="h-4 w-4" />} />
      <ToolButton icon={<Copy className="h-4 w-4" />} />
      <DeleteButton />
    </div>
  )
}

export default ShapeTools;