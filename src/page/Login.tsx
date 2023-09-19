import { useParams } from "react-router-dom";
import Login from "@/component/login/Login";
import ErrorPage from "@/common/error-page";
const LoginPage = () => {
  const { page } = useParams();
  switch (page) {
    case "login":
      return <Login page={"login"} />;
    case "register":
      return <Login page={"register"} />;
    case "forgot-password":
      return <Login page={"forgot-password"} />;
    default:
      return <ErrorPage />;
  }
};
export default LoginPage;
