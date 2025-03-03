import { setTheToolsToShow, showSidebar } from "@/redux/sidebar.ts";
import { JSX } from "react";
import { useDispatch } from "react-redux";

type ButtonProps = {
  icon: JSX.Element;
  title: string;
  keyName: string;
}

function ToolButton({ icon, title, keyName }: ButtonProps) {

  const dispatch = useDispatch();

  function addTheKeyInReduxState() {
    dispatch(setTheToolsToShow(keyName));
    dispatch(showSidebar(true));
  }

  return (
    <button className="flex flex-col px-2 py-3 cursor-pointer hover:bg-neutral-200 justify-center items-center" onClick={addTheKeyInReduxState}>
      <span className="">{icon}</span>
      <span className="text-xs">{title}</span>
    </button>
  )
}

export default ToolButton;