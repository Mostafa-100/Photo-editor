import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

function BackroundColorButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function changeBackgroundOfSelectedObject(e: ChangeEvent<HTMLInputElement>) {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("fill", e.target.value);
    canvas?.renderAll();
  }

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedShape = canvas?.getActiveObject();
    const backgroundColorInput = document.querySelector(".backgroundcolor-input") as HTMLInputElement;
    if (backgroundColorInput) {
      backgroundColorInput.value = selectedShape?.get("fill");
    }
  })

  return (
    <input type="color" className="backgroundcolor-input w-[28px] h-[31px] custom-color-input" onChange={changeBackgroundOfSelectedObject} />
  )
}

export default BackroundColorButton;