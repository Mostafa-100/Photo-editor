import { JSX } from "react";

type ShapeProps = {
  shape: JSX.Element;
  onClick: () => void;
}

function Shape({ shape, onClick }: ShapeProps) {
  return (
    <div onClick={onClick} className="border p-4 rounded-lg hover:bg-neutral-100">
      {shape}
    </div>
  )
}

export default Shape;