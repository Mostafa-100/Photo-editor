import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Slider } from "@/components/ui/slider";

function OpacityToolbar() {
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function handleOnChangeEvent(value: number[]) {
    const selectedObject = canvas?.getActiveObject();
    selectedObject?.set("opacity", value[0]);
    canvas?.renderAll();
  }

  return (
    <>
      <div>
        <h3 className="font-semibold">Opacity</h3>
        <div className="text-sm font-normal text-neutral-500 mb-2 ">Change the opacity of the selected object</div>
        <Slider defaultValue={[1]} max={1} step={0.1} onValueChange={handleOnChangeEvent} />
      </div>
    </>
  )
}

export default OpacityToolbar;