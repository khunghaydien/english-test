import { useState, useEffect, useRef } from "react";
import "./SelectField.scss";
import classNames from "classnames";
import Option, { PropsOptions } from "../Option";

const SelectField = ({
  options,
  onChange,
  multiple,
  selected = [],
  width = "200px",
  className,
}: PropsOptions) => {
  const [isOption, setIsOption] = useState(false);
  const selectFieldRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectFieldRef.current &&
        !selectFieldRef.current.contains(event.target as Node)
      ) {
        setIsOption(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const change = (selected: string[]) => {
    onChange(selected);
    if (!multiple) setIsOption(false);
  };

  const selectedText = options
    .filter((obj) => selected.includes(obj.value))
    .map((obj) => obj.text)
    .join(", ");

  const OptionStyle: React.CSSProperties = {
    width: width,
  };

  const selectSelectedStyle: React.CSSProperties = {
    width: `calc(${width} - 15px)`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div className={classNames("select", className)} ref={selectFieldRef}>
      <div
        style={OptionStyle}
        className="select-selected"
        onClick={() => setIsOption(!isOption)}
      >
        <span style={selectSelectedStyle}>{selectedText || "Chọn..."}</span>
        <span
          className={classNames(
            "select-selected--icon",
            { ["icon-angle-up"]: isOption },
            { ["icon-angle-down"]: !isOption }
          )}
        ></span>
      </div>
      {isOption && (
        <Option
          width={width}
          className="select-option"
          options={options}
          onChange={change}
          close={() => setIsOption(false)}
          multiple={multiple}
          selected={selected}
        />
      )}
    </div>
  );
};

export default SelectField;
