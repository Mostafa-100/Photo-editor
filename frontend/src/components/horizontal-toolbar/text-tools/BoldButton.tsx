import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Bold } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

function BoldButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));
    const selectedText = canvas?.getActiveObject();
    const boldButton = document.querySelector(".bold-button") as HTMLInputElement;

    if (boldButton) {
      if (selectedText?.get("fontWeight") == 600) {
        boldButton.setAttribute("aria-pressed", "true");
        boldButton.setAttribute("data-state", "on");
      } else {
        boldButton.setAttribute("aria-pressed", "false");
        boldButton.setAttribute("data-state", "off");
      }
    }
  })

  function addBoldStyle() {
    const selectedText = canvas?.getActiveObject();
    const isAlreadyBold = selectedText?.get("fontWeight") == 600;

    if (isAlreadyBold) {
      selectedText?.set('fontWeight', "normal");
    } else {
      selectedText?.set('fontWeight', 600);
    }

    canvas?.renderAll();

  }

  return (
    <Toggle className="bold-button" onClick={addBoldStyle} aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}

export default BoldButton;