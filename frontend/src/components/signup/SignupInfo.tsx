import { setShowLogin } from "@/redux/login";
import { useDispatch } from "react-redux";

function SignupInfo() {
  const dispatch = useDispatch();

  function showLogin() {
    dispatch(setShowLogin(true));
  }

  return (
    <div className="text-neutral-600 mt-2">Already have account ? <button onClick={showLogin} className="text-blue-500 cursor-pointer">Sign in</button></div>
  )
}

export default SignupInfo;