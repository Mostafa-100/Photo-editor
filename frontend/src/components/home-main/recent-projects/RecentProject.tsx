import { FolderDot } from "lucide-react";
import { Link } from "react-router-dom";

type RecentProjectType = {
  id: string;
  title: string;
  size: string;
  last_modified_at: string;
}

function RecentProject({ id, title, size, last_modified_at }: RecentProjectType) {

  return (
    <Link to={`/project/${id}`} className="flex justify-between p-3 cursor-pointer hover:bg-neutral-300">
      <div><FolderDot /></div>
      <div>{title}</div>
      <div>{`${size} px`}</div>
      <div>{last_modified_at}</div>
    </Link>
  )
}

export default RecentProject;