import { Button } from "@/components/ui/button";
import useEditFontSize from "@/hooks/horizontal-text-tools-hooks/useEditFontSize";
import { Minus } from "lucide-react";
import { RefObject } from "react";

type DecreaseFontSizeButtonProps = {
  inputRef: RefObject<HTMLInputElement | null>;
}

function DecreaseFontSizeButton({ inputRef }: DecreaseFontSizeButtonProps) {

  const decreaseFontSizeOfSelectedText = useEditFontSize({ inputRef, type: "decrease" });

  return (
    <Button variant="ghost" onClick={decreaseFontSizeOfSelectedText}>
      <Minus className="h-4 w-4" />
    </Button>
  )
}

export default DecreaseFontSizeButton;