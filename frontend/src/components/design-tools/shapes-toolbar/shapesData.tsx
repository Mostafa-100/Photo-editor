import { Circle, Square, Triangle } from "lucide-react";
import actions from "./Actions";

const shapesData = [
  { shape: <Circle color="#333" fill="#333" />, clickEvent: actions.addCircle },
  { shape: <Square color="#333" fill="#333" />, clickEvent: actions.addSquare },
  { shape: <Triangle color="#333" fill="#333" />, clickEvent: actions.addTriangle },
]

export default shapesData;