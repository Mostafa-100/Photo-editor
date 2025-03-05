import { Button } from "@/components/ui/button";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { RootState } from "@/redux/store";
import { IText } from "fabric";
import { useDispatch, useSelector } from "react-redux";

function HeadingButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  const dispatch = useDispatch();

  function addHeading() {
    const textbox = new IText("Add a heading", {
      top: 80,
      left: 80,
      fontFamily: "Montserrat",
      fontSize: 32,
    });

    textbox.on("selected", function () {
      dispatch(showTheToolsOf("text"));
    })

    canvas?.add(textbox);
    canvas?.renderAll();
  }

  return (
    <Button onClick={addHeading} variant="secondary" className="text-2xl py-7 font-bold cursor-pointer hover:bg-neutral-200">Add a heading</Button>
  )
}

export default HeadingButton;