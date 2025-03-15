import LoginArea from "@/components/login/LoginArea";
import LoginPageCover from "@/components/LoginPageCover";
import SignupArea from "@/components/signup/SignupArea";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function Login() {
  const { showLogin, showSignup } = useSelector((state: RootState) => state.login);
  return (
    <LoginPageCover>
      {showLogin && <LoginArea />}
      {showSignup && <SignupArea />}
    </LoginPageCover>
  )
}

export default Login;