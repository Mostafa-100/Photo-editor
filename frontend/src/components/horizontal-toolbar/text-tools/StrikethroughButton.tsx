import { Strikethrough } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Toggle } from "@/components/ui/toggle";

function StrikethroughButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function addStrikethrough() {
    const selectedText = canvas?.getActiveObject();
    const isAlreadyItalic = selectedText?.get("linethrough");

    if (isAlreadyItalic) {
      selectedText?.set("linethrough", false);
    } else {
      selectedText?.set("linethrough", true);
    }

    canvas?.renderAll();

  }

  return (
    <Toggle onClick={addStrikethrough} aria-label="Toggle bold">
      <Strikethrough className="h-4 w-4" />
    </Toggle>
  )
}

export default StrikethroughButton;