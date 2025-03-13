import { RootState } from "@/redux/store";
import { RefObject } from "react";
import { useSelector } from "react-redux";

type useEditFontSizeParams = {
  inputRef: RefObject<HTMLInputElement | null>;
  type: "increase" | "decrease";
}

function useEditFontSize({ inputRef, type }: useEditFontSizeParams) {
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function editFontSize() {
    const selectedText = canvas?.getActiveObject();

    if (parseInt(inputRef?.current?.value ?? "") < 12) return;

    if (!inputRef?.current) return;

    if (type == "increase") inputRef.current.value = (parseInt(inputRef?.current.value) + 1).toString();
    if (type == "decrease") inputRef.current.value = (parseInt(inputRef?.current.value) - 1).toString();

    selectedText?.set("fontSize", parseInt(inputRef?.current.value));

    canvas?.renderAll();
  }

  return editFontSize;
}

export default useEditFontSize;