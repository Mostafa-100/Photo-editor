import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FabricObject } from "fabric";

function useDeleteSelectedObject() {
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function deleteSelectedObject() {
    const selectedObjects = canvas?.getActiveObjects() as FabricObject[];
    canvas?.remove(...selectedObjects);
    canvas?.discardActiveObject();
    canvas?.renderAll();
  }

  return deleteSelectedObject;
}

export default useDeleteSelectedObject;