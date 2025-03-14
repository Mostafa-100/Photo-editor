import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { showTheToolsOf } from "@/redux/horizontalToolbar";

function useCopySelectedObject() {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function cloneSelectedObject() {
    const selectedObject = canvas?.getActiveObject();

    selectedObject?.clone()
      .then((clone) => {
        clone.on("selected", function () {
          dispatch(showTheToolsOf("shape"));
        })
        canvas?.add(clone)
      });
  }

  return cloneSelectedObject;
}

export default useCopySelectedObject;