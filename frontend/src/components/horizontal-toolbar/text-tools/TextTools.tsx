import { Bold, Italic, Strikethrough, Underline } from "lucide-react";

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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ColorButton from "../shape-tools/ColorButton";

const textStylesBtns = [
  { icon: <Bold className="h-4 w-4" />, attr: "fontWeight", defVal: "normal", newVal: "600" },
  { icon: <Italic className="h-4 w-4" />, attr: "fontStyle", defVal: "normal", newVal: "italic" },
  { icon: <Underline className="h-4 w-4" />, attr: "underline", defVal: false, newVal: true },
  { icon: <Strikethrough className="h-4 w-4" />, attr: "linethrough", defVal: false, newVal: true },
]

function TextTools() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  const fontSizeInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex gap-x-2 items-center">
      <ColorButton />
      <FontSelect />

      {
        textStylesBtns.map((btn) => {
          return <TextStyleButton key={btn.attr} canvas={canvas} icon={btn.icon} attribute={btn.attr} defaultValue={btn.defVal} newValue={btn.newVal} />
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