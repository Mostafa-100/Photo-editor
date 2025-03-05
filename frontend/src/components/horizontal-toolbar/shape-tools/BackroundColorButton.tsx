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

  return (
    <input type="color" className="w-[28px] h-[31px] custom-color-input" onChange={changeBackgroundOfSelectedObject} />
  )
}

export default BackroundColorButton;