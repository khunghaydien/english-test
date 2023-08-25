import { useState } from "react";
import "./Radiobox.scss";
import classNames from "classnames";
type Option = {
  [key: string]: string;
};
type Props = {
  onChange: (value: string) => void;
  options?: Option;
  value: string;
  className?: string;
};
const Radiobox = ({ onChange, options = {}, value, className }: Props) => {
  const [currentValue, setCurrentValue] = useState(value);
  const handleChange = (key: string) => {
    setCurrentValue(key);
    onChange(key);
  };
  return (
    <div className={classNames("radiobox-group", className)}>
      {Object.keys(options).map((key) => (
        <div key={key} className="radiobox-group-item">
          <div className="radiobox-group-value">{key}</div>
          <input
            className="radiobox-group-input"
            type="radio"
            checked={key === currentValue}
            onChange={() => handleChange(key)}
          />
          <label className="radiobox-group-label" htmlFor={key}>
            {options[key]}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Radiobox;
