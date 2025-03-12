import OpacitySlider from "./OpacitySlider";

function OpacityToolbar() {

  return (
    <>
      <div>
        <h3 className="font-semibold">Opacity</h3>
        <div className="text-sm font-normal text-neutral-500 mb-2 ">Change the opacity of the selected object</div>
        <OpacitySlider />
      </div>
    </>
  )
}

export default OpacityToolbar;