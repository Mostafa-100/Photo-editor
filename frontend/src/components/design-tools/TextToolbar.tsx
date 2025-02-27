import { Button } from "../ui/button";
import HeaderOfTool from "./HeaderOfTool";

function TextForms() {
  return (
    <>
      <HeaderOfTool title="Text" description="Add text to your canvas" />
      <div className="flex flex-col gap-3">
        <Button variant="default" className="cursor-pointer">Add a textbox</Button>
        <Button variant="secondary" className="text-2xl py-7 font-bold cursor-pointer hover:bg-neutral-200">Add a heading</Button>
        <Button variant="secondary" className="text-xl py-7 font-semibold cursor-pointer hover:bg-neutral-200">Add a subheading</Button>
        <Button variant="secondary" className="text-lg py-7 cursor-pointer hover:bg-neutral-200">Add a paragraph</Button>
      </div>
    </>
  )
}

export default TextForms;