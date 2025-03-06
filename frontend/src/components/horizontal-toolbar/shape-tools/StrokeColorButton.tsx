import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

function StrokeColorButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function changeStrokeColorOfSelectedObject(e: ChangeEvent<HTMLInputElement>) {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("stroke", e.target.value);
    canvas?.renderAll();
  }

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedShape = canvas?.getActiveObject();
    const strokeColorInput = document.querySelector(".stroke-color-input") as HTMLInputElement;
    if (strokeColorInput) {
      strokeColorInput.value = selectedShape?.get("stroke");
    }
  })

  return (
    <input type="color" className="stroke-color-input w-[28px] h-[31px] custom-color-input" onChange={changeStrokeColorOfSelectedObject} />
  )
}

export default StrokeColorButton;