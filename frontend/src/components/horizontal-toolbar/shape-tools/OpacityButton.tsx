import { Layers } from "lucide-react";
import ToolButton from "../ToolButton";
import { useDispatch } from "react-redux";
import { setTheToolsToShow, showSidebar } from "@/redux/sidebar";

function OpacityButton() {

  const dispatch = useDispatch();

  function addTheKeyInReduxState() {
    dispatch(setTheToolsToShow("opacity"));
    dispatch(showSidebar(true));
  }

  return (
    <ToolButton icon={<Layers className="h-4 w-4" />} onClick={addTheKeyInReduxState} />
  )
}

export default OpacityButton;