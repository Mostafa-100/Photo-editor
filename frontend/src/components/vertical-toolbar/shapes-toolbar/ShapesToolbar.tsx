import useGetShapes from "@/hooks/useGetShapes";
import HeaderOfTool from "../HeaderOfTool";
import Shape from "./Shape";

function ShapesToolbar() {

  const shapes = useGetShapes();

  return (
    <>
      <HeaderOfTool title="Shapes" description="Add shapes to your canvas" />
      <div className="flex gap-3">
        {
          shapes.map((s, i) =>
            <Shape key={i} shape={s.shape} onClick={s.clickEvent} />)
        }
      </div>
    </>
  )
}

export default ShapesToolbar;