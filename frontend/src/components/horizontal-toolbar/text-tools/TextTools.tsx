import FontSelect from "./FontSelect";
import DeleteButton from "../shape-tools/DeleteButton";
import CopyTextButton from "./CopyTextButton";
import DecreaseFontSizeButton from "./DecreaseFontSizeButton";
import { useRef } from "react";
import IncreaseFontSizedButton from "./IncreaseFontSizeButton";
import FontSizeInput from "./FontSizeInput";
import OpacityButton from "../shape-tools/OpacityButton";
import ForwardButton from "../shape-tools/ForwardButton";
import BackwardButton from "../shape-tools/BackwardButton";
import TextStyleButton from "./TextStyleButton";
import ColorButton from "../shape-tools/ColorButton";
import textStyleButtons from "./TextStyleButtons";

function TextTools() {

  const fontSizeInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex gap-x-2 items-center">
      <ColorButton />
      <FontSelect />
      {
        textStyleButtons.map((btn) => {
          return <TextStyleButton key={btn.attr} icon={btn.icon} attribute={btn.attr} defaultValue={btn.defVal} newValue={btn.newVal} />
        })
      }

      <DecreaseFontSizeButton inputRef={fontSizeInputRef} />
      <FontSizeInput ref={fontSizeInputRef} />
      <IncreaseFontSizedButton inputRef={fontSizeInputRef} />

      <ForwardButton />
      <BackwardButton />
      <OpacityButton />
      <CopyTextButton />
      <DeleteButton />
    </div>
  )
}

export default TextTools;