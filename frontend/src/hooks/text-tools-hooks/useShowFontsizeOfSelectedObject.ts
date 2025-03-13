import { RootState } from "@/redux/store";
import { ChangeEvent, RefObject, useState } from "react";
import { useSelector } from "react-redux";

function useShowFontsizeOfSelectedObject(inputRef: RefObject<HTMLInputElement | null>) {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const [rendered] = useState(true);

  canvas?.on("after:render", async function () {
    if (rendered) {
      const selectedText = canvas?.getActiveObject();
      const input = inputRef.current;
      if (input) {
        input.value = selectedText?.get("fontSize");
      }
    }
  })

  function changeFontSizeOfSelectedText(e: ChangeEvent<HTMLInputElement>) {
    const selectedText = canvas?.getActiveObject();
    selectedText?.set("fontSize", parseInt(e.target.value));
    canvas?.renderAll();
  }

  return changeFontSizeOfSelectedText;
}

export default useShowFontsizeOfSelectedObject;