import { Copy } from "lucide-react";
import ToolButton from "../ToolButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { showTheToolsOf } from "@/redux/horizontalToolbar";

function CopyButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function cloneSelectedObject() {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.clone(["width", "height"])
      .then((clone) => {
        clone.on("selected", function () {
          dispatch(showTheToolsOf("shape"));
        })
        canvas?.add(clone)
      });
  }

  return (
    <ToolButton icon={<Copy className="h-4 w-4" />} onClick={cloneSelectedObject} />
  )
}

export default CopyButton;