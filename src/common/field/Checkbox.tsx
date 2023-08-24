import "./Checkbox.scss";
type Option = {
  [key: string]: string;
};
type Props = {
  onChange: (value: string) => void;
  options?: Option;
  value: string;
};
const Checkbox = ({ onChange, options = {}, value }: Props) => {
  let checkedList = value ? value.split(",") : [];
  const handleChange = (key: string) => {
    if (checkedList.includes(key)) {
      checkedList = checkedList.filter((item) => item !== key);
    } else {
      checkedList.push(key);
    }
    onChange(checkedList.join(","));
  };
  return (
    <div className="checkbox-group">
      {Object.keys(options).map((key) => (
        <div key={key} className="checkbox-group-item">
          <div className="checkbox-group-value">{key}</div>
          <input
            className="checkbox-group-input"
            type="checkbox"
            checked={checkedList.includes(key)}
            onChange={() => handleChange(key)}
          />
          <div className="checkbox-group-text">{options[key]}</div>
        </div>
      ))}
    </div>
  );
};
export default Checkbox;
