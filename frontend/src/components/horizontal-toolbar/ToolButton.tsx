import { JSX } from "react";
import { Button } from "../ui/button";

type OneShapeToolProps = {
  icon: JSX.Element;
  onClick?: () => void;
}

function ToolButton({ icon, onClick }: OneShapeToolProps) {
  return (
    <Button variant="ghost" onClick={onClick}>
      {icon}
    </Button>
  )
}

export default ToolButton;