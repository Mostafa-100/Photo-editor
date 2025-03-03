import { useDispatch, useSelector } from "react-redux";
import HeaderOfTool from "../HeaderOfTool";
import Shape from "./Shape";
import shapesData from "./shapesData";
import { RootState } from "@/redux/store";

function ShapesToolbar() {
  const dispatch = useDispatch();
  const { canvas } = useSelector((state: RootState) => state.canvas);

  return (
    <>
      <HeaderOfTool title="Shapes" description="Add shapes to your canvas" />
      <div className="flex gap-3">
        {
          shapesData.map((s, i) =>
            <Shape key={i} shape={s.shape} onClick={() => s.clickEvent(canvas, dispatch)} />)
        }
      </div>
    </>
  )
}

export default ShapesToolbar;