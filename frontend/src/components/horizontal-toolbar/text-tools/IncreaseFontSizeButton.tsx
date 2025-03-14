import { Button } from "@/components/ui/button";
import useEditFontSize from "@/hooks/horizontal-text-tools-hooks/useEditFontSize";
import { Plus } from "lucide-react";
import { RefObject } from "react";

type IncreaseFontSizedButtonProps = {
  inputRef: RefObject<HTMLInputElement | null>
}

function IncreaseFontSizedButton({ inputRef }: IncreaseFontSizedButtonProps) {

  const increaseFontSizeOfSelectedText = useEditFontSize({ inputRef, type: "increase" });

  return (
    <Button variant="ghost" onClick={increaseFontSizeOfSelectedText}>
      <Plus className="h-4 w-4" />
    </Button>
  )
}

export default IncreaseFontSizedButton;