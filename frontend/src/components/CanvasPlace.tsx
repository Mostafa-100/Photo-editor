import { useDispatch } from "react-redux";
import { Canvas } from "fabric";
import { useEffect, useRef } from "react";
import { setCanvas } from "@/redux/canvas";

function CanvasPlace() {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 300,
        height: 400,
        backgroundColor: "#fff"
      });

      initCanvas.renderAll();

      dispatch(setCanvas(canvasRef.current));

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