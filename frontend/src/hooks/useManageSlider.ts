import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

type useManageSliderParams = {
  property: string;
  defaultStateValue: number;
  extraHandleChangeEventFunction?: CallableFunction
}

function useManageSlider({ property, defaultStateValue, extraHandleChangeEventFunction = () => null }: useManageSliderParams) {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const [value, setValue] = useState(defaultStateValue);
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

    extraHandleChangeEventFunction(selectedObject);

    canvas?.renderAll();
  }

  return { value, handleChangeEvent }
}

export default useManageSlider;