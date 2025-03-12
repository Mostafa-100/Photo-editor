import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { Plus } from "lucide-react";
import { RefObject } from "react";
import { useSelector } from "react-redux";

type IncreaseFontSizedButtonProps = {
  inputRef: RefObject<HTMLInputElement | null>
}

function IncreaseFontSizedButton({ inputRef }: IncreaseFontSizedButtonProps) {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function IncreaseFontSizeOfSelectedText() {
    const selectedText = canvas?.getActiveObject();
    const input = inputRef.current;

    if (!input) return;

    input.value = (parseInt(input.value) + 1).toString();
    selectedText?.set("fontSize", input.value);

    canvas?.renderAll();
  }

  return (
    <Button variant="ghost" onClick={IncreaseFontSizeOfSelectedText}>
      <Plus className="h-4 w-4" />
    </Button>
  )
}

export default IncreaseFontSizedButton;