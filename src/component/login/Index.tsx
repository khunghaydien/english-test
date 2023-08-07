import { useState } from "react";
import FormGroup from "../common/field/FormGroup";
import logo from "./../../assets/logo.svg";
import "./Index.scss";
import classNames from "classnames";
import Button from "../common/button";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [resetPassword, setResetPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState("login");
  const socialLogin = [
    {
      value: "Đăng nhập bằng Wechat",
      variant: "primary",
      icon: "icon-wechat",
    },
    {
      value: "Đăng nhập bằng Google",
      variant: "error",
      icon: "icon-google",
    },
    {
      value: "Đăng nhập bằng Facebook",
      variant: "secondary",
      icon: "icon-facebook",
    },
    {
      value: "Đăng nhập bằng Twitter",
      variant: "thirth",
      icon: "icon-twitter",
    },
  ];
  const onChangeToLogin = () => {
    setPage("login");
  };
  const onChangeToRegister = () => {
    setPage("register");
  };
  const onChangeToForgetPassword = () => {
    setPage("forgetPassword");
  };
  const onChangeResetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResetPassword(e.target.value);
    if (resetPassword !== value.password) {
      setError("chúng ta không giống nhau");
    } else {
      setError("");
    }
  };

  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="title">
        {page === "register"
          ? "ĐĂNG KÝ TÀI KHOẢN"
          : page === "forgetPassword"
          ? "QUÊN MẬT KHẨU"
          : "ĐĂNG NHẬP VÀO TÀI KHOẢN CỦA BẠN"}
      </div>

      <div
        className={
          page === "forgetPassword" ? "container-forget-password" : "container"
        }
      >
        <div className="basic-login">
          <FormGroup
            className="login-field email"
            label="Thư điện tử"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue({ ...value, email: e.target.value });
            }}
            value={value.email}
          />
          {(page === "register" || page === "login") && (
            <div className="login-field password">
              <FormGroup
                label="Mật khẩu"
                type={isPassword ? "password" : "text"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValue({ ...value, password: e.target.value });
                }}
                value={value.password}
                error={[error]}
              />
              <span
                className={classNames(
                  "icon",
                  { ["icon-eye"]: !isPassword },
                  { ["icon-eye-slash"]: isPassword }
                )}
                onClick={() => setIsPassword(!isPassword)}
              ></span>
            </div>
          )}
          {page === "register" && (
            <div className="login-field reset-password">
              <FormGroup
                label="Xác nhận mật khẩu"
                type={isResetPassword ? "password" : "text"}
                onChange={onChangeResetPassword}
                value={resetPassword}
              />
              <span
                className={classNames(
                  "icon",
                  { ["icon-eye"]: !isResetPassword },
                  { ["icon-eye-slash"]: isResetPassword }
                )}
                onClick={() => setIsResetPassword(!isResetPassword)}
              ></span>
            </div>
          )}
          <div className="login-btn">
            <Button
              width="320px"
              height="40px"
              value={
                page === "register"
                  ? "Đăng ký"
                  : page === "forgetPassword"
                  ? "Gửi"
                  : "Đăng nhập"
              }
              variant="primary"
              type="submit"
              onClick={() => console.log(value)}
            />
            {page === "register" ? (
              <div className="login-page">
                Nếu bạn đã có tài khoản
                <span className="login-here" onClick={onChangeToLogin}>
                  Vui lòng đăng nhập tại đây
                </span>
              </div>
            ) : page === "forgetPassword" ? (
              <div className="goto-help">
                Hướng dẫn cài đặt lại mật khẩu sẽ được gửi đến địa chỉ email bạn
                đã sử dụng để đăng ký tài khoản
              </div>
            ) : (
              <div
                className="forget-password"
                onClick={onChangeToForgetPassword}
              >
                Quên mật khẩu
              </div>
            )}
          </div>
        </div>
        {page !== "forgetPassword" && (
          <>
            <div className="or">Hoặc</div>
            <div className="social-login">
              {socialLogin.map(({ icon, value, variant }) => (
                <Button
                  key={value}
                  icon={icon}
                  iconSize="22px"
                  width="320px"
                  height="50px"
                  value={value}
                  variant={variant}
                  onClick={() => console.log(value)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {page === "register" ? (
        <div>
          Xác thực đăng ký tài khoản, bạn đã đồng ý với
          <span className="terms-of-use"> Điều khoản sử dụng </span> và
          <span className="privacy-policy">Chính sách bảo mật</span>
        </div>
      ) : page === "forgetPassword" ? (
        <div className="login-to-account" onClick={onChangeToLogin}>
          Login to your account
        </div>
      ) : (
        <div>
          Chưa đăng ký?
          <span className="register" onClick={onChangeToRegister}>
            Đăng ký tại đây.
          </span>
        </div>
      )}
    </div>
  );
};
export default Login;
