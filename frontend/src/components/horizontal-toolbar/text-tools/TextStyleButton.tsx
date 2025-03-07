import { Toggle } from "@/components/ui/toggle";
import { Canvas } from "fabric";
import { JSX, useRef } from "react";

type StyleButtonProps = {
  icon: JSX.Element,
  canvas: Canvas | null,
  attribute: string,
  newValue: string | number | null | boolean,
  defaultValue: string | number | null | boolean,
}

function TextStyleButton({ canvas, icon, attribute, newValue, defaultValue }: StyleButtonProps) {

  const toggleRef = useRef<HTMLButtonElement>(null);

  canvas?.on("after:render", async function () {
    await new Promise((res) => setTimeout(res, 20));

    const selectedText = canvas?.getActiveObject();

    const toggle = toggleRef.current;

    if (toggle) {
      if (selectedText?.get(attribute) == newValue) {
        changeToggleActiveState(toggle, "true", "on");
      } else {
        changeToggleActiveState(toggle, "false", "off");
      }
    }
  })

  function addStyle() {
    const selectedText = canvas?.getActiveObject();
    const isnewValueAlreadySet = selectedText?.get(attribute) == newValue;

    if (isnewValueAlreadySet) {
      selectedText?.set(attribute, defaultValue);
    } else {
      selectedText?.set(attribute, newValue);
    }

    canvas?.renderAll();

  }

  return (
    <Toggle ref={toggleRef} onClick={addStyle} aria-label="Toggle bold">
      {icon}
    </Toggle>
  )
}

function changeToggleActiveState(
  toggle: HTMLButtonElement,
  ariaPressed: "true" | "false",
  dataState: "on" | "off") {
  toggle.setAttribute("aria-pressed", ariaPressed);
  toggle.setAttribute("data-state", dataState);
}

export default TextStyleButton;