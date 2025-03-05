import { Copy } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { Toggle } from "@/components/ui/toggle";

function CopyTextButton() {

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

  return (
    <Toggle onClick={cloneSelectedText} aria-label="Toggle bold">
      <Copy className="h-4 w-4" />
    </Toggle>
  )
}

export default CopyTextButton;