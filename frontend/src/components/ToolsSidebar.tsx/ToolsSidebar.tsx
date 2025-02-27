import { ChevronsLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "@/redux/sidebarSlice";
import { RootState } from "@/redux/store";

import Templates from "./Templates";
import Images from "./Images";
import TextForms from "./TextForms";
import Shapes from "./Shapes";
import { JSX } from "react";

const toolsSidebar: Record<string, JSX.Element> = {
  "images": <Images />,
  "texts": <TextForms />,
  "designs": <Templates />,
  "shapes": <Shapes />,
  "ai": <></>,
  "settings": <></>
}

function ToolsSidebar() {

  const { isSidebarVisible, toolsToShow } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();

  function hideSidebar() {
    dispatch(showSidebar(false));
  }

  return (
    <>
      {
        isSidebarVisible &&
        <div className="relative w-[450px] bg-white px-4 py-5">
          {toolsSidebar[toolsToShow]}
          <button className="bg-white py-5 px-1 absolute top-1/2 right-[-32px] z-50 cursor-pointer" onClick={hideSidebar}><ChevronsLeft /></button>
        </div>
      }
    </>
  )
}

export default ToolsSidebar;