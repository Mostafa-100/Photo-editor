import { JSX } from "react";

type ButtonProps = {
  icon: JSX.Element;
  title: string;
}

function Button({ icon, title }: ButtonProps) {
  return (
    <button className="flex flex-col px-2 py-3 cursor-pointer hover:bg-neutral-200 justify-center items-center">
      <span className="">{icon}</span>
      <span className="text-xs">{title}</span>
    </button>
  )
}

export default Button;