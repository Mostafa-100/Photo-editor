import { Button } from "@/components/ui/button";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { RootState } from "@/redux/store";
import { IText } from "fabric";
import { useDispatch, useSelector } from "react-redux";

function TextboxButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function addTextbox() {
    const textbox = new IText("Add a text box", {
      top: 80,
      left: 80,
      fontFamily: "Montserrat",
      fontSize: 22,
    });

    textbox.on("selected", function () {
      dispatch(showTheToolsOf("text"));
    })

    canvas?.add(textbox);
    canvas?.renderAll();
  }

  return (
    <Button onClick={addTextbox} variant="default" className="cursor-pointer">Add a textbox</Button>
  )
}

export default TextboxButton;