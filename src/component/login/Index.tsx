import logo from "@/assets/logo.svg";
import { Outlet } from "react-router-dom";
import "./index.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default Login;
