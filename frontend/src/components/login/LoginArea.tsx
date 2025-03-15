import LoginForm from "@/components/login/LoginForm";
import LoginHeader from "@/components/login/LoginHeader";
import LoginInfo from "@/components/login/LoginInfo";
import AuthFormWrapper from "../AuthFormWrapper";

function LoginArea() {
  return (
    <AuthFormWrapper>
      <LoginHeader />
      <LoginForm />
      <LoginInfo />
    </AuthFormWrapper>
  )
}

export default LoginArea;