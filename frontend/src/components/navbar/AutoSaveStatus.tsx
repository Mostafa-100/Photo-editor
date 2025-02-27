import { CloudUpload } from "lucide-react";

function AutoSaveStatus() {
  return (
    <div className="flex gap-x-2">
      <CloudUpload color="#333" />
      <span style={{ color: "#333" }}>Saved</span>
    </div>
  )
}

export default AutoSaveStatus;