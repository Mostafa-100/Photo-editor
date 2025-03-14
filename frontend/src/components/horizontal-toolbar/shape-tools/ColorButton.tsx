import useSetColor from "@/hooks/horizontal-shape-tools-hooks/useSetColor";
import { useRef } from "react";

function ColorButton() {

  const colorInputRef = useRef<HTMLInputElement>(null);

  const changeBgOfSelectedObject = useSetColor({ elementRef: colorInputRef, property: "fill" });

  return (
    <input type="color" ref={colorInputRef} className="w-[28px] h-[31px] custom-color-input" onChange={changeBgOfSelectedObject} />
  )
}

export default ColorButton;