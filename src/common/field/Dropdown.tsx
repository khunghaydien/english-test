import classNames from "classnames";
import Option, { PropsOptions } from "./Option";
import { useState } from "react";
import "./Dropdown.scss";
import { isEmpty } from "lodash";
type Props = {
  text: string;
  onDropdownChange: (value: string) => void;
} & PropsOptions;
const Dropdown = ({
  text,
  options,
  onDropdownChange,
  width = "200px",
  className,
}: Props) => {
  const [isOption, setIsOption] = useState(false);
  const onMouseEnter = () => {
    setIsOption(true);
  };
  const onmouseleave = () => {
    setIsOption(false);
  };
  const change = (value: string) => {
    onDropdownChange(value);
  };
  return (
    <div
      className={classNames("dropdown", className)}
      onMouseLeave={onmouseleave}
      onMouseEnter={onMouseEnter}
    >
      <div className="dropdown-text">
        <span className="text">{text}</span>
        {options && !isEmpty(options) && (
          <span
            className={classNames(
              isOption ? "icon-angle-up" : "icon-angle-down",
              "icon"
            )}
          ></span>
        )}
      </div>
      {isOption && (
        <Option
          width={width}
          className="select-option"
          options={options}
          onChange={change}
        />
      )}
    </div>
  );
};
export default Dropdown;
