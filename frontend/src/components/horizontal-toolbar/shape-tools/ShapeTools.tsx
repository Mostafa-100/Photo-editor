import ChangeBackgroundColorButton from "./ChangeBackroundColorButton";
import ChangeStrokeColorButton from "./ChangeBorderColorButton";
import SetStrokeButton from "./SetStrokeButton";
import BackwardButton from "./BackwardButton";
import ForwardButton from "./ForwardButton";
import DeleteButton from "./DeleteButton";
import CopyButton from "./CopyButton";
import OpacityButton from "./OpacityButton";

function ShapeTools() {
  return (
    <div className="flex gap-x-2 items-center">
      <ChangeBackgroundColorButton />
      <ChangeStrokeColorButton />
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