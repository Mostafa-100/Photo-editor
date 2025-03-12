import { RootState } from "@/redux/store";
import { ChangeEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";

function ColorButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const [rendered] = useState(true);

  function changeBgOfSelectedObject(e: ChangeEvent<HTMLInputElement>) {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("fill", e.target.value);
    canvas?.renderAll();
  }

  canvas?.on("after:render", async function () {
    if (rendered) {
      const selectedObject = canvas?.getActiveObject();
      if (colorInputRef.current) {
        colorInputRef.current.value = selectedObject?.get("fill");
      }
    }
  })

  return (
    <input type="color" ref={colorInputRef} className="w-[28px] h-[31px] custom-color-input" onChange={changeBgOfSelectedObject} />
  )
}

export default ColorButton;