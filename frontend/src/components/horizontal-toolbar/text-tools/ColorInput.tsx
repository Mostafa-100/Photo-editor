import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

function ColorInput() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function changeColor(e: ChangeEvent<HTMLInputElement>) {
    const selectedText = canvas?.getActiveObject();
    selectedText?.set("fill", e.target.value);
    canvas?.renderAll();
  }

  return (
    <input onChange={changeColor} type="color" className="w-[28px] h-[31px] custom-color-input" />
  )
}

export default ColorInput;