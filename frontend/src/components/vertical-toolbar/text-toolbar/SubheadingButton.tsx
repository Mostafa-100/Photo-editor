import { Button } from "@/components/ui/button";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { RootState } from "@/redux/store";
import { IText } from "fabric";
import { useDispatch, useSelector } from "react-redux";

function SubheadingButton() {

  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function addSubHeading() {
    const textbox = new IText("Add a subheading", {
      top: 80,
      left: 80,
      fontFamily: "Montserrat",
      fontSize: 29,
    });

    textbox.on("selected", function () {
      dispatch(showTheToolsOf("text"));
    })

    canvas?.add(textbox);
    canvas?.renderAll();
  }

  return (
    <Button onClick={addSubHeading} variant="secondary" className="text-xl py-7 font-semibold cursor-pointer hover:bg-neutral-200">Add a subheading</Button>
  )
}

export default SubheadingButton;