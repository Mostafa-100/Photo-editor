import { Toggle } from "@/components/ui/toggle";
import useSetTextStyle from "@/hooks/horizontal-text-tools-hooks/useSetTextStyle";
import { JSX, useRef } from "react";

type StyleButtonProps = {
  icon: JSX.Element,
  attribute: string,
  newValue: string | number | null | boolean,
  defaultValue: string | number | null | boolean,
}

function TextStyleButton({ icon, attribute, newValue, defaultValue }: StyleButtonProps) {

  const toggleRef = useRef<HTMLButtonElement>(null);

  const addStyle = useSetTextStyle({ attribute, newValue, defaultValue, toggleRef });

  return (
    <Toggle ref={toggleRef} onClick={addStyle} aria-label="Toggle bold">
      {icon}
    </Toggle>
  )
}

export default TextStyleButton;