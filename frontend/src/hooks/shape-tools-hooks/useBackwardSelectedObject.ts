import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FabricObject } from "fabric";

function useBackwardSelectedObject() {
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function backwardSelectedObject() {
    const selectedObject = canvas?.getActiveObject() as FabricObject;
    canvas?.sendObjectBackwards(selectedObject);
    canvas?.renderAll();
  }

  return backwardSelectedObject;
}

export default useBackwardSelectedObject;