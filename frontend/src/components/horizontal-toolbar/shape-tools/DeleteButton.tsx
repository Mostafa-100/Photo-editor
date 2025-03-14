import { Trash } from "lucide-react";
import ToolButton from "../ToolButton";
import useDeleteSelectedObject from "@/hooks/horizontal-shape-tools-hooks/useDeleteSelectedObject";

function DeleteButton() {

  const deleteSelectedObject = useDeleteSelectedObject();

  return (
    <ToolButton icon={<Trash className="h-4 w-4" />} onClick={deleteSelectedObject} />
  )
}

export default DeleteButton;