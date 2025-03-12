import useSetupCanvas from "@/hooks/useSetupCanvas";
import { useRef } from "react";

function CanvasPlace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useSetupCanvas(canvasRef);

  return (
    <canvas ref={canvasRef} />
  )
}

export default CanvasPlace;