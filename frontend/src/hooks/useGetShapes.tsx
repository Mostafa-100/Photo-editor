import { Circle, Square, Star, Triangle } from "lucide-react";
import { useAddCircle, useAddSquare, useAddStar, useAddTriangle } from "@/components/vertical-toolbar/shapes-toolbar/actions";

function useGetShapes() {
  const shapes = [
    {
      shape: <Circle size={34} color="#333" fill="#333" />,
      clickEvent: useAddCircle()
    },
    {
      shape: <Square size={34} color="#333" fill="#333" />,
      clickEvent: useAddSquare()
    },
    {
      shape: <Triangle size={34} color="#333" fill="#333" />,
      clickEvent: useAddTriangle()
    },
    {
      shape: <Star size={34} color="#333" fill="#333" />,
      clickEvent: useAddStar()
    },
  ]

  return shapes;
}

export default useGetShapes;