import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

function ColorInput() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedText = canvas?.getActiveObject();
    const inputText = document.querySelector(".input-text-color") as HTMLInputElement;

    if (inputText) {
      inputText.value = selectedText?.get("fill");
    }
  })

  function changeColor(e: ChangeEvent<HTMLInputElement>) {
    const selectedText = canvas?.getActiveObject();
    selectedText?.set("fill", e.target.value);
    canvas?.renderAll();
  }

  return (
    <input onChange={changeColor} type="color" className="w-[28px] h-[31px] custom-color-input input-text-color" />
  )
}

export default ColorInput;