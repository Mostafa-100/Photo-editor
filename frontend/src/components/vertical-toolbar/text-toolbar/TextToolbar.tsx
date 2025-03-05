import HeaderOfTool from "../HeaderOfTool";
import AddHeadingButton from "./HeadingButton";
import TextboxButton from "./TextboxButton";
import SubheadingButton from "./SubheadingButton";
import ParagraphButton from "./ParagraphButton";


function TextToolbar() {
  return (
    <>
      <HeaderOfTool title="Text" description="Add text to your canvas" />
      <div className="flex flex-col gap-3">
        <TextboxButton />
        <AddHeadingButton />
        <SubheadingButton />
        <ParagraphButton />
      </div>
    </>
  )
}

export default TextToolbar;