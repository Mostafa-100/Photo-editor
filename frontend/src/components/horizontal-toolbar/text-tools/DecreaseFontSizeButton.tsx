import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { Minus } from "lucide-react";
import { RefObject } from "react";
import { useSelector } from "react-redux";

type DecreaseFontSizeButtonProps = {
  inputRef: RefObject<HTMLInputElement | null>;
}

function DecreaseFontSizeButton({ inputRef }: DecreaseFontSizeButtonProps) {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function DecreaseFontSizeOfSelectedText() {
    const selectedText = canvas?.getActiveObject();
    const input = inputRef.current;

    if (parseInt(input?.value ?? "") < 12) return;

    if (!input) return;

    input.value = (parseInt(input.value) - 1).toString();

    selectedText?.set("fontSize", parseInt(input.value));

    canvas?.renderAll();
  }

  return (
    <Button variant="ghost" onClick={DecreaseFontSizeOfSelectedText}>
      <Minus className="h-4 w-4" />
    </Button>
  )
}

export default DecreaseFontSizeButton;