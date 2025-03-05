import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Bold } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

function BoldButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

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
    <Toggle onClick={addBoldStyle} aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}

export default BoldButton;