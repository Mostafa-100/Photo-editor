import { ArrowDown } from "lucide-react";
import ToolButton from "../ToolButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function BackwardButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function backwardSelectedObject() {
    const selectedObject = canvas?.getActiveObject();
    canvas?.sendObjectBackwards(selectedObject);
  }

  return (
    <ToolButton icon={<ArrowDown className="h-4 w-4" />} onClick={backwardSelectedObject} />
  )
}

export default BackwardButton;