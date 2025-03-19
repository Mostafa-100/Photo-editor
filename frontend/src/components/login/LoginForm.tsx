import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLoginUser from "@/hooks/useLoginUser";
import ErrorDisplay from "../ErrorDisplay";
import AuthSubmitButton from "../AuthSubmitButton";
import AuthLoadingButton from "../AuthLoadingButton";

function LoginForm() {

  const { mutation, errors, userNotExistError } = useLoginUser();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Input name="email" type="text" placeholder="Email" />
        {errors?.email && <ErrorDisplay message={errors.email[0]} />}
      </div>
      <div className="mb-2">
        <Input name="password" type="password" placeholder="Password" />
        {errors?.password && <ErrorDisplay message={errors.password[0]} />}
      </div>
      <div className="my-2">
        {userNotExistError && <ErrorDisplay message={userNotExistError[0]} />}
      </div>
      {
        mutation.isPending ?
          <AuthLoadingButton />
          : <AuthSubmitButton text="continue" />
      }
    </form>
  )
}

export default LoginForm;