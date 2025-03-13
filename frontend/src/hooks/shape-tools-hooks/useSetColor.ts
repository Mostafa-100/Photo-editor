import { RootState } from "@/redux/store";
import { ChangeEvent, RefObject, useState } from "react";
import { useSelector } from "react-redux";

type useSetColorParams = {
  elementRef: RefObject<HTMLInputElement | null>;
  property: string;
}

function useSetColor({ elementRef, property }: useSetColorParams) {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const [rendered] = useState(true);

  function changeColorOfSelectedObject(e: ChangeEvent<HTMLInputElement>) {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set(property, e.target.value);
    canvas?.renderAll();
  }

  canvas?.on("after:render", async function () {
    if (rendered) {
      const selectedObject = canvas?.getActiveObject();
      if (elementRef.current) {
        elementRef.current.value = selectedObject?.get(property);
      }
    }
  })

  return changeColorOfSelectedObject;
}

export default useSetColor;