import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { RootState } from "@/redux/store";
import { IText } from "fabric";
import { useDispatch, useSelector } from "react-redux";

function useAddTextbox(fontSize: number = 22) {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  function addTextbox() {
    const textbox = new IText("Add a text box", {
      top: 80,
      left: 80,
      fontFamily: "Montserrat",
      fontSize: fontSize,
    });

    textbox.on("selected", function () {
      dispatch(showTheToolsOf("text"));
    })

    canvas?.add(textbox);
    canvas?.renderAll();
  }

  return addTextbox;
}

export default useAddTextbox;