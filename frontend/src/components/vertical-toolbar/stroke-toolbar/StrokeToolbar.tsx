import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import NormalStrokeButton from "./NormalStrokeButton";
import DashedStrokeButton from "./DashedStrokeButton";
import StrokeSlider from "./StrokeSlider";

function StrokeToolbar() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  return (
    <>
      <div>
        <h3 className="mb-2 font-semibold">Stroke width</h3>
        <StrokeSlider />
      </div>
      <div className="mt-5">
        <h3 className="mb-3 font-semibold">Stroke type</h3>
        <NormalStrokeButton canvas={canvas} />
        <DashedStrokeButton canvas={canvas} />
      </div>
    </>
  )
}

export default StrokeToolbar;