import { Input } from "@/components/ui/input"
import { RootState } from "@/redux/store";
import { ChangeEvent, RefObject, useEffect } from "react";
import { useSelector } from "react-redux";

type FontSizeInputProps = {
  ref: RefObject<HTMLInputElement | null>,
}

function FontSizeInput({ ref }: FontSizeInputProps) {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  canvas?.on("selection:updated", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedText = canvas?.getActiveObject();
    const fontSizeInput = document.querySelector(".font-size-input");
    fontSizeInput.value = selectedText?.get("fontSize");
  })

  function changeFontSizeOfSelectedText(e: ChangeEvent<HTMLInputElement>) {
    const selectedText = canvas?.getActiveObject();
    selectedText?.set("fontSize", parseInt(e.target.value));
    canvas?.renderAll();
  }


  return (
    <Input ref={ref} onChange={changeFontSizeOfSelectedText} type="number" min="12" defaultValue="16" className="font-size-input size-9 px-1 text-center" />
  )
}

export default FontSizeInput;