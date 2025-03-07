import { Bold, Italic, Strikethrough, Underline } from "lucide-react";

import FontSelect from "./FontSelect";
import DeleteButton from "../shape-tools/DeleteButton";
import CopyTextButton from "./CopyTextButton";
import ColorInput from "./ColorInput";
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

function TextTools() {

  const { canvas } = useSelector((state: RootState) => state.canvas);

  const fontSizeInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex gap-x-2 items-center">
      <ColorInput />
      <FontSelect />
      <TextStyleButton canvas={canvas} icon={<Bold className="h-4 w-4" />} attribute="fontWeight" defaultValue="normal" newValue="600" />

      <TextStyleButton canvas={canvas} icon={<Italic className="h-4 w-4" />} attribute="fontStyle" defaultValue="normal" newValue="italic" />

      <TextStyleButton canvas={canvas} icon={<Underline className="h-4 w-4" />} attribute="underline" defaultValue={false} newValue={true} />

      <TextStyleButton canvas={canvas} icon={<Strikethrough className="h-4 w-4" />} attribute="linethrough" defaultValue={false} newValue={true} />

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