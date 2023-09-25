import { useParams } from "react-router-dom";
import ErrorPage from "@/common/error-page";
import { ForgotPassword, LoginForm } from "@/type";
import Login from "@/component/login";
import LoginContainer from "@/container/login";
type Props = {
  handleLogin: (payload: LoginForm) => void,
  handleRegister: (payload: LoginForm) => void,
  handleChangePassword: (payload: LoginForm) => void,
  handleForgotPassword: (payload: ForgotPassword) => void
}
const LoginComponent = ({ handleLogin, handleRegister, handleForgotPassword, handleChangePassword }: Props) => {
  const { page } = useParams();
  switch (page) {
    case "login":
      return <Login page={"login"} submit={handleLogin} />;
    case "register":
      return <Login page={"register"} submit={handleRegister} />;
    case "forgot-password":
      return <Login page={"forgot-password"} submit={handleForgotPassword} />;
    case "change-password":
      return <Login page={"forgot-password"} submit={handleChangePassword} />;
    default:
      return <ErrorPage />;
  }
};
export default LoginComponent;