import { ZoomIn, ZoomOut } from "lucide-react";

type ProjectPageFooterProps = {
  className: string;
}

function ProjectPageFooter({ className }: ProjectPageFooterProps) {
  return (
    <div className={`bg-white p-2 ${className} flex justify-end gap-x-2`}>
      <ZoomIn size={18} className="cursor-pointer" />
      <ZoomOut size={18} className="cursor-pointer" />
    </div>
  )
}

export default ProjectPageFooter;