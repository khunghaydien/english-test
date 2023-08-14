import classNames from "classnames";
import Button from "../button";

export type Option = {
  value: any;
  icon?: string;
  text: string;
};
export type PropsOptions = {
  width?: string;
  className?: string;
  options: Option[];
  onChange?: (selected: string[]) => void;
  close?: () => void;
  multiple?: boolean;
  selected?: string[];
  required?: boolean;
};
const Option = ({
  width,
  className,
  options,
  selected = [],
  multiple,
  onChange,
  close,
}: PropsOptions) => {
  const onClickOption = (value: string) => {
    if (onChange)
      if (!multiple) onChange([value]);
      else {
        const isValueExist = selected.indexOf(value) === -1;
        if (isValueExist) selected = [...selected, value];
        onChange(selected);
      }
  };

  const removeSelected = (value: string) => {
    if (multiple && selected.includes(value)) {
      selected = selected.filter((item: string) => item !== value);
      if (onChange) onChange(selected);
    }
  };

  const onClose = () => {
    if (close) close();
  };

  const optionItemWidthStyle: React.CSSProperties = {
    width: multiple ? `calc(${width} - 40px)` : width,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const optionWidthStyle: React.CSSProperties = {
    width: `calc(${width} + 10px)`,
  };

  return (
    <div className={classNames("option", className)} style={optionWidthStyle}>
      <div className="option-container">
        <div className="option-list">
          {options.map(({ icon, value, text }) => (
            <div
              className={classNames("option-item", {
                ["active"]: selected.includes(value),
              })}
              key={value}
            >
              <div
                className={classNames("option-item--value", {
                  ["active"]: selected.includes(value),
                })}
                onClick={() => onClickOption(value)}
              >
                {icon && (
                  <div className={classNames("option-item--icon", icon)}></div>
                )}
                <div className="option-item--text" style={optionItemWidthStyle}>
                  {text}
                </div>
              </div>
              <div
                className={classNames("option-item--close", "icon-close", {
                  ["display-none"]: !multiple || !selected.includes(value),
                })}
                onClick={() => removeSelected(value)}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {multiple && (
        <div className="option-close">
          <Button value="Đóng" onClick={onClose} />
        </div>
      )}
    </div>
  );
};
export default Option;
