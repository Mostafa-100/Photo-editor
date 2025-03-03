import { Circle, Square, Star, Triangle } from "lucide-react";
import { addCircle, addSquare, addStar, addTriangle } from "./actions";
import { Canvas } from "fabric";
import { Dispatch } from "@reduxjs/toolkit";

const shapesData = [
  {
    shape: <Circle size={34} color="#333" fill="#333" />,
    clickEvent: (canvas: Canvas, dispatch: Dispatch) => addCircle(canvas, dispatch)
  },
  {
    shape: <Square size={34} color="#333" fill="#333" />,
    clickEvent: (canvas: Canvas, dispatch: Dispatch) => addSquare(canvas, dispatch)
  },
  {
    shape: <Triangle size={34} color="#333" fill="#333" />,
    clickEvent: (canvas: Canvas, dispatch: Dispatch) => addTriangle(canvas, dispatch)
  },
  {
    shape: <Star size={34} color="#333" fill="#333" />,
    clickEvent: (canvas: Canvas, dispatch: Dispatch) => addStar(canvas, dispatch)
  },
]

export default shapesData;