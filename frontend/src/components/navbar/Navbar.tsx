import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.jpg";
import { ChevronDown, CloudUpload, Download, Image, Redo2, Undo2 } from "lucide-react";
import { File } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import MenuItem from "./MenuItem";

function Navbar() {
  return (
    <nav className="py-2 px-5 bg-white border-b">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} className="w-12" />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer hover:bg-neutral-200 py-2 px-2 rounded-sm">
              <span>File</span>
              <ChevronDown size={19} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white rounded-sm shadow-sm z-50">
              <MenuItem icon={<File size={19} />} title="Open" description="Open a JSON File" />
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex gap-x-2 border-x px-3 mx-4">
            <MousePointerClick size={29} className="cursor-pointer hover:bg-neutral-200 p-1 rounded-sm" />
            <Undo2 size={29} className="cursor-pointer hover:bg-neutral-200 p-1 rounded-sm" />
            <Redo2 size={29} className="cursor-pointer hover:bg-neutral-200 p-1 rounded-sm" />
          </div>
          <div className="flex gap-x-2">
            <CloudUpload color="#333" />
            <span style={{ color: "#333" }}>Saved</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer py-2 px-2 rounded-sm gap-2 hover:bg-neutral-200">
              <span>Export</span>
              <Download size={19} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white rounded-sm shadow-sm z-50">
              <MenuItem icon={<File size={99} />} title="JSON" description="Save for leter editing" />
              <MenuItem icon={<Image size={99} />} title="PNG" description="Best for sharing on the web" />
              <MenuItem icon={<Image size={99} />} title="JPG" description="Best for printing" />
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="p-0.5 hover:bg-neutral-300 rounded-full cursor-pointer">
            <img src={profile} className="size-9 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
