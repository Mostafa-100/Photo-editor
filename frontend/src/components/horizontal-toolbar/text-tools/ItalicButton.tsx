import { Italic } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Toggle } from "@/components/ui/toggle";

function ItalicButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  function addItalicStyle() {
    const selectedText = canvas?.getActiveObject();
    const isAlreadyItalic = selectedText?.get("fontStyle") == "italic";

    if (isAlreadyItalic) {
      selectedText?.set("fontStyle", "normal");
    } else {
      selectedText?.set("fontStyle", "italic");
    }

    canvas?.renderAll();

  }

  return (
    <Toggle onClick={addItalicStyle} aria-label="Toggle bold">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}

export default ItalicButton;