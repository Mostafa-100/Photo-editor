import { ArrowDown, ArrowUp, Blend, Copy, Layers, Paintbrush, ScanLine, Trash } from "lucide-react";
import ToolButton from "../ToolButton";
import SetStrokeButton from "../shape-tools/SetStrokeButton";
import StrokeColorButton from "../shape-tools/StrokeColorButton";
import BackroundColorButton from "../shape-tools/BackroundColorButton";
import ForwardButton from "../shape-tools/ForwardButton";
import BackwardButton from "../shape-tools/BackwardButton";
import OpacityButton from "../shape-tools/OpacityButton";
import CopyButton from "../shape-tools/CopyButton";
import DeleteButton from "../shape-tools/DeleteButton";

function ImageTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <BackroundColorButton />
      <StrokeColorButton />
      <SetStrokeButton />
      <ToolButton icon={<Blend className="h-4 w-4" />} />
      <ToolButton icon={<ScanLine className="h-4 w-4" />} />
      <ForwardButton />
      <BackwardButton />
      <OpacityButton />
      <CopyButton />
      <DeleteButton />
    </div>
  )
}

export default ImageTools;