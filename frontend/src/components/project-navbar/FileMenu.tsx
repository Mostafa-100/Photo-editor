import { ChevronDown, File } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import MenuItem from "./MenuItem";
import useSaveTheProjectInDatabase from "@/hooks/useSaveTheProjectInDatabase";

function FileMenu() {

  const saveTheProjectInDatabase = useSaveTheProjectInDatabase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer hover:bg-neutral-200 py-2 px-2 rounded-sm">
        <span className="font-sm">File</span>
        <ChevronDown size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white rounded-sm shadow-sm z-50">
        <MenuItem onClick={saveTheProjectInDatabase} icon={<File size={19} />} title="Save" description="Save your project" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FileMenu;