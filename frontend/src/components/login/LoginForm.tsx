import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))
    }>
      <Input placeholder="Email" className="mb-2" {...register("email", { required: true })} />
      {errors.email && <div className="text-red-500">Email is required</div>}
      <Input placeholder="Password" className="mb-2" {...register("password", { required: true })} />
      {errors.password && <div className="text-red-500">Password is required</div>}
      <Button type="submit" variant="default" className="w-full cursor-pointer">Continue</Button>
    </form >
  )
}

export default LoginForm;