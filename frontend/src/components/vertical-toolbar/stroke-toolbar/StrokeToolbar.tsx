import { Slider } from "@/components/ui/slider"
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

function StrokeToolbar() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const [width, setWidth] = useState(0);
  const [rendered] = useState(true);

  canvas?.on("after:render", function () {
    if (rendered) {
      const selectedObject = canvas?.getActiveObject();
      setWidth(selectedObject?.get("strokeWidth"));
    }
  })

  function handleOnChangeEvent(value: number[]) {
    setWidth(value[0]);
    const selectedObject = canvas?.getActiveObject();

    if (!selectedObject?.stroke) {
      selectedObject?.set("stroke", "#000");
    }

    selectedObject?.set("strokeWidth", value[0]);
    canvas?.renderAll();
  }

  function changeStrokeToDashed() {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("strokeDashArray", [10, 5]);
    canvas?.renderAll();
  }

  function changeStrokeToNormal() {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("strokeDashArray", null);
    canvas?.renderAll();
  }

  return (
    <>
      <div>
        <h3 className="mb-2 font-semibold">Stroke width</h3>
        <Slider defaultValue={[0]} max={50} step={1} onValueChange={handleOnChangeEvent} value={[width]} />
      </div>
      <div className="mt-5">
        <h3 className="mb-3 font-semibold">Stroke width</h3>
        <div onClick={changeStrokeToNormal} className="bg-neutral-100 py-6 px-5 mb-3 cursor-pointer hover:bg-neutral-200">
          <span className="border-4 border-black block w-full"></span>
        </div>
        <div onClick={changeStrokeToDashed} className="bg-neutral-100 py-6 px-5 cursor-pointer hover:bg-neutral-200">
          <span className="border-4 border-black border-dashed block w-full"></span>
        </div>
      </div>
    </>
  )
}

export default StrokeToolbar;