import { Download, File, Image } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import MenuItem from "./MenuItem";
import useExportDesignTo from "@/hooks/useExportDesignTo";

function ExportFonctionality() {
  const exportToPNG = useExportDesignTo("png");
  const exportToJPEG = useExportDesignTo("jpeg");
  const exportToJSON = useExportDesignTo("json");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-0 cursor-pointer py-2 px-2 rounded-sm gap-2 hover:bg-neutral-200">
        <span>Export</span>
        <Download size={19} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white rounded-sm shadow-sm z-50">
        <MenuItem onClick={exportToJSON} icon={<File size={19} />} title="JSON" description="Save for leter editing" />
        <MenuItem onClick={exportToPNG} icon={<Image size={19} />} title="PNG" description="Best for sharing on the web" />
        <MenuItem onClick={exportToJPEG} icon={<Image size={19} />} title="JPEG" description="Best for printing" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ExportFonctionality;