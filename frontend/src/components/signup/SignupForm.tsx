import useRegisterUser from "@/hooks/useRegisterUser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ErrorDisplay from "../ErrorDisplay";

function SignupForm() {

  const { mutation, errors } = useRegisterUser();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Input placeholder="Name" />
        {errors?.name && <ErrorDisplay message={errors.name} />}
      </div>
      <div className="mb-2">
        <Input placeholder="Email" />
        {errors?.email && <ErrorDisplay message={errors.email} />}
      </div>
      <div className="mb-2">
        <Input placeholder="Password" />
        {errors?.password && <ErrorDisplay message={errors.password} />}
      </div>
      <Button variant="default" className="w-full cursor-pointer">Continue</Button>
    </form>
  )
}

export default SignupForm;