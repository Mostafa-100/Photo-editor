import { Strikethrough } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Toggle } from "@/components/ui/toggle";

function StrikethroughButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedText = canvas?.getActiveObject();
    const strikeThroughButton = document.querySelector(".strike-through-button") as HTMLInputElement;

    if (strikeThroughButton) {
      if (selectedText?.get("linethrough") == true) {
        strikeThroughButton.setAttribute("aria-pressed", "true");
        strikeThroughButton.setAttribute("data-state", "on");
      } else {
        strikeThroughButton.setAttribute("aria-pressed", "false");
        strikeThroughButton.setAttribute("data-state", "off");
      }
    }
  })

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
    <Toggle onClick={addStrikethrough} aria-label="Toggle bold" className="strike-through-button">
      <Strikethrough className="4 w-4" />
    </Toggle>
  )
}

export default StrikethroughButton;