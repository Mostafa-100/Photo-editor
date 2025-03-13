import { Bold, Italic, Strikethrough, Underline } from "lucide-react";

const classValue = "h-4 w-4";

const textStyleButtons = [
  {
    icon: <Bold className={classValue} />,
    attr: "fontWeight",
    defVal: "normal",
    newVal: "600"
  },
  {
    icon: <Italic className={classValue} />,
    attr: "fontStyle",
    defVal: "normal",
    newVal: "italic"
  },
  {
    icon: <Underline className={classValue} />,
    attr: "underline",
    defVal: false,
    newVal: true
  },
  {
    icon: <Strikethrough className={classValue} />,
    attr: "linethrough",
    defVal: false,
    newVal: true
  },
]

export default textStyleButtons;