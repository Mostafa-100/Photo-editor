import { Bot, Image, LayoutDashboard, Pencil, Settings, Shapes, Type } from "lucide-react";

const iconSize = 22;
const strokeWidth = 22;

const toolsButtonData = [
  {
    keyName: "design",
    icon: <LayoutDashboard size={iconSize} strokeWidth={strokeWidth} />,
    title: "Design"
  },
  {
    keyName: "image",
    icon: <Image size={iconSize} strokeWidth={strokeWidth} />,
    title: "Image"
  },
  {
    keyName: "text",
    icon: <Type size={iconSize} strokeWidth={strokeWidth} />,
    title: "Text"
  },
  {
    keyName: "shape",
    icon: <Shapes size={iconSize} strokeWidth={strokeWidth} />,
    title: "Shapes"
  },

  {
    keyName: "draw",
    icon: <Pencil size={iconSize} strokeWidth={strokeWidth} />,
    title: "Draw"
  },
  {
    keyName: "ai",
    icon: <Bot size={iconSize} strokeWidth={strokeWidth} />,
    title: "Ai"
  },
  {
    keyName: "setting",
    icon: <Settings size={iconSize} strokeWidth={strokeWidth} />,
    title: "Settings"
  },
]

export default toolsButtonData;