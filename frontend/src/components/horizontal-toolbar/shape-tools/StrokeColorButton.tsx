import useSetColor from "@/hooks/horizontal-shape-tools-hooks/useSetColor";
import { useRef } from "react";

function StrokeColorButton() {

  const inputRef = useRef<HTMLInputElement>(null);

  const changeStrokeColorOfSelectedObject = useSetColor({ elementRef: inputRef, property: "stroke" });

  return (
    <input type="color" ref={inputRef} className="w-[28px] h-[31px] custom-color-input" onChange={changeStrokeColorOfSelectedObject} />
  )
}

export default StrokeColorButton;