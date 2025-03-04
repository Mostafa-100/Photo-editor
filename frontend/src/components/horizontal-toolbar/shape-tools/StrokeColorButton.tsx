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

  return (
    <input type="color" className="w-[28px] h-[31px] custom-color-input" onChange={changeStrokeColorOfSelectedObject} />
  )
}

export default StrokeColorButton;