import Login from "@/page/login";
import { changePassword, forgotPassword, login, register } from "@/store/action/auth";
import { ForgotPassword, LoginForm } from "@/type";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch: any) => ({
    handleLogin: (payload: LoginForm) => dispatch(login(payload)),
    handleRegister: (payload: LoginForm) => dispatch(register(payload)),
    handleChangePassword: (payload: LoginForm) => dispatch(changePassword(payload)),
    handleForgotPassword: (payload: ForgotPassword) => dispatch(forgotPassword(payload))
});
export default connect(null, mapDispatchToProps)(Login)