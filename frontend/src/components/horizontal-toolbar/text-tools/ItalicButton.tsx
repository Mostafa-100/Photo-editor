import { Italic } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Toggle } from "@/components/ui/toggle";

function ItalicButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedText = canvas?.getActiveObject();
    const italicButton = document.querySelector(".italic-button") as HTMLInputElement;

    if (italicButton) {
      if (selectedText?.get("fontStyle") == "italic") {
        italicButton.setAttribute("aria-pressed", "true");
        italicButton.setAttribute("data-state", "on");
      } else {
        italicButton.setAttribute("aria-pressed", "false");
        italicButton.setAttribute("data-state", "off");
      }
    }
  })

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
    <Toggle onClick={addItalicStyle} aria-label="Toggle bold" className="italic-button">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}

export default ItalicButton;