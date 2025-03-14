import { useDispatch, useSelector } from "react-redux";
import CanvasPlace from "./CanvasPlace";
import ProjectPageFooter from "./ProjectPageFooter";
import HorizontalToolbar from "./horizontal-toolbar/HorizontalToolbar";
import { RootState } from "@/redux/store";
import { showSidebar } from "@/redux/sidebar";

function CanvasContainer() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function clearCanvas(e) {
    if (e.target.nodeName == "CANVAS") return;
    canvas?.discardActiveObject();
    dispatch(showSidebar(false));
    canvas?.renderAll();
  }

  return (
    <div className="w-full">
      <HorizontalToolbar />
      <div className="h-[calc(100%-86px)] py-2 overflow-y-auto grid place-items-center bg-neutral-200" onClick={clearCanvas}>
        <CanvasPlace />
      </div>
      <ProjectPageFooter />
    </div>
  )
}

export default CanvasContainer;