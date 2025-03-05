import { Button } from "@/components/ui/button";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { RootState } from "@/redux/store";
import { IText } from "fabric";
import { useDispatch, useSelector } from "react-redux";

function ParagraphButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function addParagraph() {
    const textbox = new IText("Add a paragraph", {
      top: 80,
      left: 80,
      fontFamily: "Montserrat",
      fontSize: 24,
    });

    textbox.on("selected", function () {
      dispatch(showTheToolsOf("text"));
    })

    canvas?.add(textbox);
    canvas?.renderAll();
  }

  return (
    <Button onClick={addParagraph} variant="secondary" className="text-lg py-7 cursor-pointer hover:bg-neutral-200">Add a paragraph</Button>
  )
}

export default ParagraphButton;