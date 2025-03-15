import { JSX } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

type MenuItemProps = {
  icon: JSX.Element;
  title: string;
  description: string;
}

function MenuItem({ icon, title, description }: MenuItemProps) {
  return (
    <DropdownMenuItem className="px-3 py-2 flex items-center outline-0 cursor-pointer hover:bg-neutral-200">
      <div className="pr-1">{icon}</div>
      <div className="flex flex-col">
        <span className="font-medium text-sm">{title}</span>
        <span className="text-xs text-neutral-500">{description}</span>
      </div>
    </DropdownMenuItem>
  )
}

export default MenuItem;