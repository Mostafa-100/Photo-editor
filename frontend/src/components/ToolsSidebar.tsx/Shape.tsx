import { JSX } from "react";

type ShapeProps = {
  shape: JSX.Element;
}

function Shape({ shape }: ShapeProps) {
  return (
    <div className="border p-4 rounded-lg hover:bg-neutral-100">
      {shape}
    </div>
  )
}

export default Shape;