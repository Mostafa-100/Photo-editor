import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import allToolsSidebar from "./allDesignTools";
import HideDesignToolsButton from "./HideDesignToolsButton";

function ToolsContainer() {

  const { isSidebarVisible, toolsToShow } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      {
        isSidebarVisible &&
        <div className="relative w-[450px] bg-white px-4 py-5">
          {allToolsSidebar[toolsToShow]}
          <HideDesignToolsButton />
        </div>
      }
    </>
  )
}

export default ToolsContainer;