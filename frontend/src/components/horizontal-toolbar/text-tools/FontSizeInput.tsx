import { Input } from "@/components/ui/input"
import useShowFontsizeOfSelectedObject from "@/hooks/horizontal-text-tools-hooks/useShowFontsizeOfSelectedObject";
import { RefObject } from "react";

type FontSizeInputProps = {
  ref: RefObject<HTMLInputElement | null>,
}

function FontSizeInput({ ref }: FontSizeInputProps) {

  const changeFontSizeOfSelectedText = useShowFontsizeOfSelectedObject(ref);

  return (
    <Input ref={ref} onChange={changeFontSizeOfSelectedText} type="number" min="12" defaultValue="16" className="font-size-input size-9 px-1 text-center" />
  )
}

export default FontSizeInput;