import { Canvas } from "fabric";

function DashedStrokeButton({ canvas }: { canvas: Canvas | null }) {

  function changeStrokeToDashed() {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("strokeDashArray", [10, 5]);
    canvas?.renderAll();
  }

  return (
    <div onClick={changeStrokeToDashed} className="bg-neutral-100 py-6 px-5 cursor-pointer hover:bg-neutral-200">
      <span className="border-4 border-black border-dashed block w-full"></span>
    </div>
  )
}

export default DashedStrokeButton;