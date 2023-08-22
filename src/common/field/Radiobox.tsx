import { uniqueId } from "lodash";
import { useState } from "react";
import "./Radiobox.scss";
type Option = {
  value: string;
  text: string;
};
type Props = {
  onChange: (value: any) => void;
  options: Option[];
  value: string;
};
const Radiobox = ({ onChange, options, value }: Props) => {
  const id = `radiobox-input-id-${uniqueId()}`;
  const [currentValue, setCurrentValue] = useState(value);
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className="radiobox-group">
      {options.map(({ value, text }, idx) => (
        <div key={idx} className="radiobox-group-item">
          <div className="radiobox-group-value">{value}</div>
          <input
            className="radiobox-group-input"
            type="radio"
            id={id}
            value={value}
            checked={value === currentValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeValue(e)
            }
          />
          <label className="radiobox-group-label" htmlFor={id}>
            {text}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Radiobox;
