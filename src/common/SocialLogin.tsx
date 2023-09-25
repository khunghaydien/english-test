import Button from "@/common/button";
import { socialLogin } from "@/const/Login";

const SocialLogin = () => {
  return (
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
  );
};

export default SocialLogin;
