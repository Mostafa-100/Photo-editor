import { Paintbrush } from "lucide-react";
import ToolButton from "../ToolButton";
import useAddTheToolKeyInReduxState from "@/hooks/useAddTheToolKeyInReduxState";

function SetStrokeButton() {

  const addTheKeyInReduxState = useAddTheToolKeyInReduxState("stroke");

  return (
    <ToolButton icon={<Paintbrush className="h-4 w-4" />} onClick={addTheKeyInReduxState} />
  )
}

export default SetStrokeButton;