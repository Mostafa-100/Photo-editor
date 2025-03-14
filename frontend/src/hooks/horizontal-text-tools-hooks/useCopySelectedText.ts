import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { showTheToolsOf } from "@/redux/horizontalToolbar";

function useCopySelectedText() {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function cloneSelectedText() {
    const selectedText = canvas?.getActiveObject();

    selectedText?.clone()
      .then((clone) => {
        clone.on("selected", function () {
          dispatch(showTheToolsOf("text"));
        })
        canvas?.add(clone)
      });
  }

  return cloneSelectedText;
}

export default useCopySelectedText;