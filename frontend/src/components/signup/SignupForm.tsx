import { Button } from "../ui/button";
import { Input } from "../ui/input";

function SignupForm() {
  return (
    <form>
      <Input placeholder="Name" className="mb-2" />
      <Input placeholder="Email" className="mb-2" />
      <Input placeholder="Password" className="mb-2" />
      <Button variant="default" className="w-full cursor-pointer">Continue</Button>
    </form>
  )
}

export default SignupForm;