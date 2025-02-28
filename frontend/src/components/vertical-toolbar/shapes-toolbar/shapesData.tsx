import { Circle, Square, Triangle } from "lucide-react";
import { addCircle, addSquare, addTriangle } from "./actions";

const shapesData = [
  { shape: <Circle color="#333" fill="#333" />, clickEvent: addCircle },
  { shape: <Square color="#333" fill="#333" />, clickEvent: addSquare },
  { shape: <Triangle color="#333" fill="#333" />, clickEvent: addTriangle },
]

export default shapesData;