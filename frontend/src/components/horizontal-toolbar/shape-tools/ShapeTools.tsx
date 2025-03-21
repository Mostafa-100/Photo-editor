import BackroundColorButton from "./ColorButton";
import StrokeColorButton from "./StrokeColorButton";
import SetStrokeButton from "./SetStrokeButton";
import BackwardButton from "./BackwardButton";
import ForwardButton from "./ForwardButton";
import DeleteButton from "./DeleteButton";
import CopyButton from "./CopyButton";
import OpacityButton from "./OpacityButton";

function ShapeTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <BackroundColorButton />
      <StrokeColorButton />
      <SetStrokeButton />
      <ForwardButton />
      <BackwardButton />
      <OpacityButton />
      <CopyButton />
      <DeleteButton />
    </div>
  )
}

export default ShapeTools;