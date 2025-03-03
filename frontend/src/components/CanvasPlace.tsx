import { useDispatch } from "react-redux";
import { Canvas } from "fabric";
import { useEffect, useRef } from "react";
import { setCanvas } from "@/redux/canvas.ts";
import { showTheToolsOf } from "@/redux/horizontalToolbar";

function CanvasPlace() {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);

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

      initCanvas.renderAll();

      dispatch(setCanvas(initCanvas));

      return () => {
        initCanvas.dispose();
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} />
  )
}

export default CanvasPlace;