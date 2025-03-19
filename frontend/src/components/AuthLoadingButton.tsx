import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";

function AuthLoadingButton() {
  return (
    <Button variant="secondary" className="w-full cursor-not-allowed">
      <span>Loading</span>
      <span><LoaderCircle className="animate-spin" /></span>
    </Button>
  )
}

export default AuthLoadingButton;