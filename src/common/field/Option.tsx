import classNames from "classnames";
import Button from "../button";

type OptionInfo = {
  icon?: string;
  text: string;
};

export type Option = {
  [key: string]: OptionInfo;
};

export type PropsOptions = {
  width?: string;
  className?: string;
  options: Option;
  onChange?: (selected: string) => void;
  close?: () => void;
  multiple?: boolean;
  selected?: string;
  required?: boolean;
};
const Option = ({
  width,
  className,
  options,
  selected = "",
  multiple,
  onChange,
  close,
}: PropsOptions) => {
  const onClickOption = (value: string) => {
    if (onChange)
      if (!multiple) onChange(value);
      else {
        let selectedList = selected.split(",");
        if (selectedList.includes(value)) {
          selectedList = selectedList.filter((item) => item !== value);
        } else {
          selectedList.push(value);
        }
        onChange(selected);
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
          {Object.keys(options).map((key) => (
            <div
              className={classNames("option-item", {
                ["active"]: selected.split(",").includes(key),
              })}
              key={key}
            >
              <div
                className={classNames("option-item--value", {
                  ["active"]: selected.split(",").includes(key),
                })}
                onClick={() => onClickOption(key)}
              >
                {options[key].icon && (
                  <div
                    className={classNames(
                      "option-item--icon",
                      options[key].icon
                    )}
                  ></div>
                )}
                <div className="option-item--text" style={optionItemWidthStyle}>
                  {options[key].text}
                </div>
              </div>
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
