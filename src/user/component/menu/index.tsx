import classNames from "classnames";
import Dropdown from "../../common/field/Dropdown";
import { menu } from "./../../const/Menu";
import "./index.scss";
const Menu = () => {
  const onChange = (subValue: string[], value: string) => {
    console.log(subValue, value);
  };
  return (
    <div className="menu">
      <div className="container">
        <div className={classNames("icon-home menu-left icon")}></div>
        <div className="menu-main">
          {menu.map(({ text, value, subValue }) => (
            <Dropdown
              text={text}
              key={value}
              options={subValue}
              onChange={(subValue: string[]) => onChange(subValue, value)}
              className="menu-dropdown"
            />
          ))}
        </div>
        <div className="menu-right">
          <div className={classNames("icon-bell notification icon")}></div>
          <div className="profile">
            <div className={classNames("icon-person icon")}></div>
            <div className="profile-name">{"Phùng Hữu Đạt"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
