import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAddTheToolKeyInReduxState from "@/hooks/useAddTheToolKeyInReduxState";

function FontSelect() {

  const addTheKeyInReduxState = useAddTheToolKeyInReduxState("font");

  return (
    <Button variant="ghost" onClick={addTheKeyInReduxState}>
      <span>Select a font</span>
      <ChevronDown />
    </Button>
  )
}

export default FontSelect;