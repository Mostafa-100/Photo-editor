import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.jpg";
import { ChevronDown, CloudUpload, Download, Redo2, Undo2 } from "lucide-react";
import { File } from "lucide-react";
import { MousePointerClick } from "lucide-react";

function Navbar() {
  return (
    <nav className="py-2 px-5 bg-white border-b">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} className="w-12" />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer hover:bg-neutral-200 p-1 rounded-sm">
              <span>File</span>
              <ChevronDown size={19} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white p-3 rounded-sm shadow-sm z-50 hover:bg-neutral-200 transition-colors">
              <DropdownMenuItem className="flex items-center outline-0 cursor-pointer gap-x-1">
                <File />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Open</span>
                  <span className="text-sm text-neutral-500">Open a JSON File</span>
                </div>
              </DropdownMenuItem>
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
          <div className="flex items-center gap-x-1 cursor-pointer hover:bg-neutral-200 rounded-sm p-2">
            <span>Export</span>
            <Download />
          </div>
          <div className="p-0.5 hover:bg-neutral-300 rounded-full cursor-pointer">
            <img src={profile} className="size-9 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;
