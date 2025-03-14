import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FabricObject } from "fabric";


function useForwardSelectedObject() {
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function forwardSelectedObject() {
    const selectedObject = canvas?.getActiveObject() as FabricObject;
    canvas?.bringObjectForward(selectedObject);
    canvas?.renderAll();
  }

  return forwardSelectedObject;
}

export default useForwardSelectedObject;