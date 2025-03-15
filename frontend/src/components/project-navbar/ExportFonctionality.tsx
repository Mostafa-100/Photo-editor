import { Download, File, Image } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import MenuItem from "./MenuItem";

function ExportFonctionality() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer py-2 px-2 rounded-sm gap-2 hover:bg-neutral-200">
        <span>Export</span>
        <Download size={19} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white rounded-sm shadow-sm z-50">
        <MenuItem icon={<File size={19} />} title="JSON" description="Save for leter editing" />
        <MenuItem icon={<Image size={19} />} title="PNG" description="Best for sharing on the web" />
        <MenuItem icon={<Image size={19} />} title="JPG" description="Best for printing" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ExportFonctionality;