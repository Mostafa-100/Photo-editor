import { Underline } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Toggle } from "@/components/ui/toggle";

function UnderlineButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedText = canvas?.getActiveObject();
    const underlineButton = document.querySelector(".underline-button") as HTMLInputElement;

    if (underlineButton) {
      if (selectedText?.get("underline") == true) {
        underlineButton.setAttribute("aria-pressed", "true");
        underlineButton.setAttribute("data-state", "on");
      } else {
        underlineButton.setAttribute("aria-pressed", "false");
        underlineButton.setAttribute("data-state", "off");
      }
    }
  })

  function addUnderline() {
    const selectedText = canvas?.getActiveObject();
    const isAlreadyItalic = selectedText?.get("underline");

    if (isAlreadyItalic) {
      selectedText?.set("underline", false);
    } else {
      selectedText?.set("underline", true);
    }

    canvas?.renderAll();

  }

  return (
    <Toggle onClick={addUnderline} aria-label="Toggle bold" className="underline-button">
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}

export default UnderlineButton;