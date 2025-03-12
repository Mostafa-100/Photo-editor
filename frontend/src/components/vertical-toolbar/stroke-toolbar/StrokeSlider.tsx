import { Slider } from "@/components/ui/slider"
import useManageStrokeSlider from "@/hooks/useManageSlider";
import { FabricObject } from "fabric";

function StrokeSlider() {

  const { value: width, handleChangeEvent } = useManageStrokeSlider({
    property: "strokeWidth",
    defaultStateValue: 1,
    extraHandleChangeEventFunction: (selectedObject: FabricObject) => {
      if (!selectedObject?.stroke) {
        selectedObject?.set("stroke", "#000");
      }
    }
  });

  return (
    <Slider defaultValue={[0]} max={50} step={1} onValueChange={handleChangeEvent} value={[width]} />
  )
}

export default StrokeSlider;