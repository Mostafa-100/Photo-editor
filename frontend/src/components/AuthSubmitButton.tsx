import { Button } from "./ui/button";

function AuthSubmitButton({ text }: { text: string }) {
  return (
    <Button type="submit" variant="default" className="w-full cursor-pointer">{text}</Button>
  )
}

export default AuthSubmitButton;