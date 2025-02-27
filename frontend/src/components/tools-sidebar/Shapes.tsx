import { Circle, Square, Triangle } from "lucide-react";
import Header from "./Header";
import Shape from "./Shape";

function Shapes() {
  return (
    <>
      <Header title="Shapes" description="Add shapes to your canvas" />
      <div className="flex gap-3">
        <Shape shape={<Circle color="#333" stroke="currentColor" />} />
        <Shape shape={<Square color="#333" stroke="currentColor" />} />
        <Shape shape={<Triangle color="#333" stroke="currentColor" />} />
      </div>
    </>
  )
}

export default Shapes;