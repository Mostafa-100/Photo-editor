import useRegisterUser from "@/hooks/useRegisterUser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ErrorDisplay from "../ErrorDisplay";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthLoadingButton from "../AuthLoadingButton";

function SignupForm() {

  const { mutation, errors } = useRegisterUser();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Input name="name" type="text" placeholder="Name" />
        {errors?.name && <ErrorDisplay message={errors.name} />}
      </div>
      <div className="mb-2">
        <Input name="email" type="text" placeholder="Email" />
        {errors?.email && <ErrorDisplay message={errors.email} />}
      </div>
      <div className="mb-2">
        <Input name="password" type="text" placeholder="Password" />
        {errors?.password && <ErrorDisplay message={errors.password} />}
      </div>
      {
        mutation.isPending ?
          <AuthLoadingButton />
          : <AuthSubmitButton text="continue" />
      }
    </form>
  )
}

export default SignupForm;