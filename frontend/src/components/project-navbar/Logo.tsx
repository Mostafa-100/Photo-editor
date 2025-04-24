import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/"><img src={logo} className="w-12" /></Link>
  )
}

export default Logo;