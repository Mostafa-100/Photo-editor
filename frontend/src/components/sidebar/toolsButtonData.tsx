import { Bot, Image, LayoutDashboard, Pencil, Settings, Shapes, Type } from "lucide-react";

const toolsButtonData = [
  { keyName: "design", icon: <LayoutDashboard size={22} strokeWidth={1} />, title: "Design" },
  { keyName: "image", icon: <Image size={22} strokeWidth={1} />, title: "Image" },
  { keyName: "text", icon: <Type size={22} strokeWidth={1} />, title: "Text" },
  { keyName: "shape", icon: <Shapes size={22} strokeWidth={1} />, title: "Shapes" },

  { keyName: "draw", icon: <Pencil size={22} strokeWidth={1} />, title: "Draw" },
  { keyName: "ai", icon: <Bot size={22} strokeWidth={1} />, title: "Ai" },
  { keyName: "setting", icon: <Settings size={22} strokeWidth={1} />, title: "Settings" },
]

export default toolsButtonData;