import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { setTheToolsToShow, showSidebar } from "@/redux/sidebar.ts";
import { Button } from "@/components/ui/button";

function FontSelect() {

  const dispatch = useDispatch();

  function addTheKeyInReduxState() {
    dispatch(setTheToolsToShow('font'));
    dispatch(showSidebar(true));
  }

  return (
    <Button variant="ghost" onClick={addTheKeyInReduxState}>
      <span>Select a font</span>
      <ChevronDown />
    </Button>
  )
}

export default FontSelect;