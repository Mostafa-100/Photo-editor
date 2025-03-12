import { Canvas } from "fabric";

function NormalStrokeButton({ canvas }: { canvas: Canvas | null }) {

  function changeStrokeToNormal() {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("strokeDashArray", null);
    canvas?.renderAll();
  }

  return (
    <div onClick={changeStrokeToNormal} className="bg-neutral-100 py-6 px-5 mb-3 cursor-pointer hover:bg-neutral-200">
      <span className="border-4 border-black block w-full"></span>
    </div>
  )
}

export default NormalStrokeButton;