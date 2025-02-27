import { Bot, Image, LayoutDashboard, Pencil, Settings, Shapes, Type } from "lucide-react";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="min-h-[calc(100vh-57px)] w-20 flex flex-col">
      <Button keyName="designs" icon={<LayoutDashboard size={22} strokeWidth={1} />} title={"Design"} />
      <Button keyName="images" icon={<Image size={22} strokeWidth={1} />} title={"Image"} />
      <Button keyName="texts" icon={<Type size={22} strokeWidth={1} />} title={"Text"} />
      <Button keyName="shapes" icon={<Shapes size={22} strokeWidth={1} />} title={"Shapes"} />
      <Button keyName="draws" icon={<Pencil size={22} strokeWidth={1} />} title={"Draw"} />
      <Button keyName="ai" icon={<Bot size={22} strokeWidth={1} />} title={"Ai"} />
      <Button keyName="settings" icon={<Settings size={22} strokeWidth={1} />} title={"Settings"} />
    </div>
  )
}

export default Sidebar;