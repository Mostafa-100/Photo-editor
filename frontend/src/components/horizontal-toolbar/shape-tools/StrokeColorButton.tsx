import { RootState } from "@/redux/store";
import { ChangeEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";

function StrokeColorButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const inputRef = useRef<HTMLInputElement>(null);
  const [rendered] = useState(true);

  function changeStrokeColorOfSelectedObject(e: ChangeEvent<HTMLInputElement>) {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("stroke", e.target.value);
    canvas?.renderAll();
  }

  canvas?.on("after:render", async function () {
    if (rendered) {
      const selectedShape = canvas?.getActiveObject();
      if (inputRef.current) {
        inputRef.current.value = selectedShape?.get("stroke");
      }
    }
  })

  return (
    <input type="color" ref={inputRef} className="w-[28px] h-[31px] custom-color-input" onChange={changeStrokeColorOfSelectedObject} />
  )
}

export default StrokeColorButton;