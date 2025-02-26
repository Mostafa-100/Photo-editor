import { Bot, Image, LayoutDashboard, Pencil, Settings, Shapes, Type } from "lucide-react";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="min-h-[calc(100vh-57px)] w-20 flex flex-col">
      <Button icon={<LayoutDashboard size={22} />} title={"Design"} />
      <Button icon={<Image size={22} />} title={"Image"} />
      <Button icon={<Type size={22} />} title={"Text"} />
      <Button icon={<Shapes size={22} />} title={"Shapes"} />
      <Button icon={<Pencil size={22} />} title={"Draw"} />
      <Button icon={<Bot size={22} />} title={"Ai"} />
      <Button icon={<Settings size={22} />} title={"Settings"} />
    </div>
  )
}

export default Sidebar;