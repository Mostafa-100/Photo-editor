import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginForm() {
  return (
    <form>
      <Input placeholder="Email" className="mb-2" />
      <Input placeholder="Password" className="mb-2" />
      <Button type="submit" variant="default" className="w-full cursor-pointer">Continue</Button>
    </form>
  )
}

export default LoginForm;