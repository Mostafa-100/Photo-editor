import { RootState } from "@/redux/store";
import { RefObject } from "react";
import { useSelector } from "react-redux";

type useSetTextStyleParams = {
  attribute: string;
  defaultValue: string | number | null | boolean;
  newValue: string | number | null | boolean;
  toggleRef: RefObject<HTMLButtonElement | null>;
}

function useSetTextStyle({ attribute, defaultValue, newValue, toggleRef }: useSetTextStyleParams) {
  const { canvas } = useSelector((state: RootState) => state.canvas);

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

  return addStyle;
}

function changeToggleActiveState(
  toggle: HTMLButtonElement,
  ariaPressed: "true" | "false",
  dataState: "on" | "off") {
  toggle.setAttribute("aria-pressed", ariaPressed);
  toggle.setAttribute("data-state", dataState);
}

export default useSetTextStyle;