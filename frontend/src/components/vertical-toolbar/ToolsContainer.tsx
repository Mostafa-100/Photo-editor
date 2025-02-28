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
        <div className="relative w-[450px] bg-white px-4 py-5">
          {toolsData[toolsToShow]}
          <HideVerticalToolbarButton />
        </div>
      }
    </>
  )
}

export default ToolsContainer;