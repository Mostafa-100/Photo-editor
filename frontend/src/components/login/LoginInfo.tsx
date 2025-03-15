import { setShowSignup } from "@/redux/login";
import { useDispatch } from "react-redux";

function LoginInfo() {

  const dispatch = useDispatch();

  function showSignup() {
    dispatch(setShowSignup(true));
  }

  return (
    <div className="mt-2 text-neutral-600">Don't have account? <button onClick={showSignup} className="text-blue-500 cursor-pointer">Sign up</button></div>
  )
}

export default LoginInfo;