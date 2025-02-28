import { showSidebar } from "@/redux/sidebar";
import { ChevronsLeft } from "lucide-react";
import { useDispatch } from "react-redux";

function HideVerticalToolbarButton() {

  const dispatch = useDispatch();

  function hideSidebar() {
    dispatch(showSidebar(false));
  }

  return (
    <button className="bg-white py-5 px-1 absolute top-1/2 right-[-32px] z-50 cursor-pointer" onClick={hideSidebar}><ChevronsLeft /></button>
  )
}

export default HideVerticalToolbarButton;