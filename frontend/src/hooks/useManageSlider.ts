import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function useManageSlider(property: string) {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const [value, setValue] = useState(1);
  const [rendered] = useState(true);

  canvas?.on("after:render", function () {
    if (rendered) {
      const selectedObject = canvas?.getActiveObject();
      setValue(selectedObject?.get(property));
    }
  })

  useEffect(() => {
    const selectedObject = canvas?.getActiveObject();
    setValue(selectedObject?.get(property));
  }, [])

  function handleChangeEvent(value: number[]) {
    setValue(value[0]);
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set(property, value[0]);
    canvas?.renderAll();
  }

  return { value, handleChangeEvent }
}

export default useManageSlider;