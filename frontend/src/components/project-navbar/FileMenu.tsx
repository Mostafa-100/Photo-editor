import { ChevronDown, File } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import MenuItem from "./MenuItem";

function FileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer hover:bg-neutral-200 py-2 px-2 rounded-sm">
        <span className="font-sm">File</span>
        <ChevronDown size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white rounded-sm shadow-sm z-50">
        <MenuItem icon={<File size={19} />} title="Open" description="Open a JSON File" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FileMenu;