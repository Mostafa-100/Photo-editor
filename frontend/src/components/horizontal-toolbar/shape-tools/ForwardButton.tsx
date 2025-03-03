import { ArrowUp } from "lucide-react";
import ToolButton from "../ToolButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function ForwardButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function forwardSelectedObject() {
    const selectedObject = canvas?.getActiveObject();
    canvas?.bringObjectForward(selectedObject);
    canvas?.renderAll();
  }

  return (
    <ToolButton icon={<ArrowUp className="h-4 w-4" />} onClick={forwardSelectedObject} />
  )
}

export default ForwardButton;