import { Slider } from "@/components/ui/slider";
import useManageSlider from "@/hooks/useManageSlider";

function OpacitySlider() {

  const { value, handleChangeEvent } = useManageSlider("opacity");

  return (
    <Slider className="opacity-slider" defaultValue={[1]} max={1} step={0.1} onValueChange={handleChangeEvent} value={[value]} />
  )
}

export default OpacitySlider;