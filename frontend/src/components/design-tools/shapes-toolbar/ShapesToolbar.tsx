import HeaderOfTool from "../HeaderOfTool";
import Shape from "./Shape";
import shapesData from "./ShapesData";

function Shapes() {
  return (
    <>
      <HeaderOfTool title="Shapes" description="Add shapes to your canvas" />
      <div className="flex gap-3">
        {
          shapesData.map((s, i) => <Shape key={i} shape={s.shape} onClick={s.clickEvent} />)
        }
      </div>
    </>
  )
}

export default Shapes;