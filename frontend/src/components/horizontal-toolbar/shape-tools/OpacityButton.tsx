import { Layers } from "lucide-react";
import ToolButton from "../ToolButton";
import useAddTheToolKeyInReduxState from "@/hooks/useAddTheToolKeyInReduxState";

function OpacityButton() {

  const addTheKeyInReduxState = useAddTheToolKeyInReduxState("opacity");

  return (
    <ToolButton icon={<Layers className="h-4 w-4" />} onClick={addTheKeyInReduxState} />
  )
}

export default OpacityButton;