import { Paintbrush } from "lucide-react";
import ToolButton from "../ToolButton";
import { useDispatch } from "react-redux";
import { setTheToolsToShow, showSidebar } from "@/redux/sidebar";

function SetStrokeButton() {

  const dispatch = useDispatch();

  function addTheKeyInReduxState() {
    dispatch(setTheToolsToShow("stroke"));
    dispatch(showSidebar(true));
  }

  return (
    <ToolButton icon={<Paintbrush className="h-4 w-4" />} onClick={addTheKeyInReduxState} />
  )
}

export default SetStrokeButton;