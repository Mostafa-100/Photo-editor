import { ArrowDown, ArrowUp, Layers } from "lucide-react";

import ToolButton from "../ToolButton";
import FontSelect from "./FontSelect";
import DeleteButton from "../shape-tools/DeleteButton";
import CopyTextButton from "./CopyTextButton";
import ColorInput from "./ColorInput";
import BoldButton from "./BoldButton";
import ItalicButton from "./ItalicButton";
import UnderlineButton from "./UnderlineButton";
import StrikethroughButton from "./StrikethroughButton";
import DecreaseFontSizeButton from "./DecreaseFontSizeButton";
import { useRef } from "react";
import IncreaseFontSizedButton from "./IncreaseFontSizeButton";
import FontSizeInput from "./FontSizeInput";
import OpacityButton from "../shape-tools/OpacityButton";
import ForwardButton from "../shape-tools/ForwardButton";
import BackwardButton from "../shape-tools/BackwardButton";

function TextTools() {

  const fontSizeInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex gap-x-2 items-center">
      <ColorInput />
      <FontSelect />
      <BoldButton />
      <ItalicButton />
      <UnderlineButton />
      <StrikethroughButton />

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