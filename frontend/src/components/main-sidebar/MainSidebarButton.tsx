import { JSX } from "react";
import { Button } from "../ui/button";

type MainSidebarButtonType = {
  icon: JSX.Element;
  label: string;
  active?: boolean;
}

function MainSidebarButton({ icon, label, active = false }: MainSidebarButtonType) {
  const notActiveStyles = "hover:bg-white transition-colors";
  const activeStyles = "bg-white";
  return (
    <Button className={`w-full flex px-24 cursor-pointer ${active ? activeStyles : notActiveStyles}`} variant="ghost">
      <span>{icon}</span>
      <span>{label}</span>
    </Button>
  )
}

export default MainSidebarButton;