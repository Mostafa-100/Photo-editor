import { useDispatch } from "react-redux";
import { Canvas } from "fabric";
import { RefObject, useEffect } from "react";
import { setCanvas } from "@/redux/canvas.ts";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { showSidebar } from "@/redux/sidebar";

function useSetupCanvas(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 330,
        height: 420,
        backgroundColor: "#fff"
      });

      initCanvas.on("selection:cleared", function () {
        dispatch(showTheToolsOf("none"));
      })

      initCanvas.on("mouse:down", function (e) {
        if (!e.target) dispatch(showSidebar(false));
      })

      initCanvas.renderAll();

      dispatch(setCanvas(initCanvas));

      return () => {
        initCanvas.dispose();
      }
    }
  }, [])
}

export default useSetupCanvas;