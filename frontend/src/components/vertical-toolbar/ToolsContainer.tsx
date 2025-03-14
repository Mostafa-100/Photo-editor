import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import toolsData from "./toolsData";
import HideVerticalToolbarButton from "./HideVerticalToolbarButton";

function ToolsContainer() {

  const { isSidebarVisible, toolsToShow } = useSelector((state: RootState) => state.sidebar);

  return (
    <>
      {
        isSidebarVisible &&
        <div className="relative w-[450px] bg-white">
          <div className="h-[calc(100vh-92px)] overflow-y-auto overflow-x-hidden px-2 py-5">
            {toolsData[toolsToShow]}
          </div>
          <HideVerticalToolbarButton />
        </div>
      }
    </>
  )
}

export default ToolsContainer;