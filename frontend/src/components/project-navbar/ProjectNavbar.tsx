import AutoSaveStatus from "./AutoSaveStatus";
import ExportFonctionality from "./ExportFonctionality";
import UserMenu from "./UserMenu";
import Toolbar from "./Toolbar";
import FileMenu from "./FileMenu";
import Logo from "./Logo";

function ProjectNavbar() {
  return (
    <nav className="py-2 px-5 bg-white border-b">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Logo />
          <FileMenu />
          {/* <Toolbar /> */}
          {/* <AutoSaveStatus /> */}
        </div>
        <div className="flex items-center gap-2">
          <ExportFonctionality />
          <UserMenu />
        </div>
      </div>
    </nav >
  )
}

export default ProjectNavbar;
