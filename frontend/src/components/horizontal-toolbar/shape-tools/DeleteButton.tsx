import { Trash } from "lucide-react";
import ToolButton from "../ToolButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function DeleteButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function deleteSelectedObject() {
    const selectedObjects = canvas?.getActiveObjects();
    canvas?.remove(...selectedObjects);
    canvas?.discardActiveObject();
    canvas?.renderAll();
  }

  return (
    <ToolButton icon={<Trash className="h-4 w-4" />} onClick={deleteSelectedObject} />
  )
}

export default DeleteButton;