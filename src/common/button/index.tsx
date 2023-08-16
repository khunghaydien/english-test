import classNames from "classnames";
import "./index.scss";
type Button = {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: string;
  className?: string;
  value?: string;
  width?: string;
  height?: string;
  onClick: () => void;
};
type Props = {
  icon?: string;
  iconSize?: string;
} & Button;

const Button = ({
  type = "button",
  variant = "default",
  icon,
  className,
  value,
  width,
  height,
  iconSize,
  onClick,
}: Props) => {
  const buttonStyle: React.CSSProperties = {
    width: width,
    height: height,
  };
  const iconStyle: React.CSSProperties = {
    fontSize: iconSize,
  };
  return (
    <button
      style={buttonStyle}
      type={type}
      className={classNames("btn", className, variant)}
      onClick={onClick}
    >
      {icon && <div style={iconStyle} className={icon}></div>}
      {value}
    </button>
  );
};
export default Button;
