import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

function OpacityToolbar() {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const [value, setValue] = useState(1);

  useEffect(() => {
    const selectedObject = canvas?.getActiveObject();
    setValue(selectedObject?.get("opacity"));
  }, [])

  function handleOnChangeEvent(value: number[]) {
    setValue(value[0]);
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("opacity", value[0]);
    canvas?.renderAll();
  }

  return (
    <>
      <div>
        <h3 className="font-semibold">Opacity</h3>
        <div className="text-sm font-normal text-neutral-500 mb-2 ">Change the opacity of the selected object</div>
        <Slider className="opacity-slider" defaultValue={[1]} max={1} step={0.1} onValueChange={handleOnChangeEvent} value={[value]} />
      </div>
    </>
  )
}

export default OpacityToolbar;