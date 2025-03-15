import AuthFormWrapper from "../AuthFormWrapper";
import SignupForm from "./SignupForm";
import SignupHeader from "./SignupHeader";
import SignupInfo from "./SignupInfo";

function SignupArea() {
  return (
    <AuthFormWrapper>
      <SignupHeader />
      <SignupForm />
      <SignupInfo />
    </AuthFormWrapper>
  )
}

export default SignupArea;