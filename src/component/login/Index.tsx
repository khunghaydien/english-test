import FormGroup from "@/common/field/FormGroup";
import SocialLogin from "../../common/SocialLogin";
import { useState } from "react";
import classNames from "classnames";
import Button from "@/common/button";
import { NavLink } from "react-router-dom";
import { LoginForm } from "@/type";
import './index.scss'
type Props = {
  page: string;
  submit: (payload: LoginForm) => void
};
const Login = ({ page, submit }: Props) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [resetPassword, setResetPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(true);
  const [error, setError] = useState("");
  const onChangeResetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResetPassword(e.target.value);
    if (resetPassword !== value.password) {
      setError("chúng ta không giống nhau");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    submit(value)
  }
  return (
    <>
      <div className="title">
        {page === "register"
          ? "ĐĂNG KÝ TÀI KHOẢN"
          : page === "forgot-password"
            ? "QUÊN MẬT KHẨU"
            : "ĐĂNG NHẬP VÀO TÀI KHOẢN CỦA BẠN"}
      </div>
      <div
        className={
          page === "forgot-password" ? "container-forget-password" : "container"
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
                  : page === "forgot-password"
                    ? "Gửi"
                    : "Đăng nhập"
              }
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            />
            {page === "register" ? (
              <div className="login-page">
                Nếu bạn đã có tài khoản
                <NavLink className="login-here" to={"/account/login"}>
                  Vui lòng đăng nhập tại đây
                </NavLink>
              </div>
            ) : page === "forgot-password" ? (
              <div className="goto-help">
                Hướng dẫn cài đặt lại mật khẩu sẽ được gửi đến địa chỉ email bạn
                đã sử dụng để đăng ký tài khoản
              </div>
            ) : (
              <NavLink
                className="forget-password"
                to={"/account/forgot-password"}
              >
                Quên mật khẩu
              </NavLink>
            )}
          </div>
        </div>
        {page !== "forgot-password" && (
          <>
            <div className="or">Hoặc</div>
            <SocialLogin />
          </>
        )}
      </div>
      {page === "register" ? (
        <div>
          Xác thực đăng ký tài khoản, bạn đã đồng ý với
          <span className="terms-of-use"> Điều khoản sử dụng </span> và
          <span className="privacy-policy"> Chính sách bảo mật</span>
        </div>
      ) : page === "forgot-password" ? (
        <NavLink className="login-to-account" to={"/account/login"}>
          Đăng nhập vào tài khoản của bạn
        </NavLink>
      ) : (
        <div>
          Chưa đăng ký?
          <NavLink className="register" to={"/account/register"}>
            Đăng ký tại đây.
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Login;
