import { Underline } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Toggle } from "@/components/ui/toggle";

function UnderlineButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

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
    <Toggle onClick={addUnderline} aria-label="Toggle bold">
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}

export default UnderlineButton;