import { CloudUpload } from "lucide-react";

function AutoSaveStatus() {
  return (
    <div className="flex gap-x-2 items-center">
      <CloudUpload color="#333" size={20} />
      <span className="text-[#333] text-sm font-medium">Saved</span>
    </div>
  )
}

export default AutoSaveStatus;