import classNames from "classnames";
import Dropdown from "../../../common/field/Dropdown";
import { menu } from "../../const/Menu";
import "./index.scss";
export type Menu = {
  menu: string;
  subMenu: string;
};
type Props = {
  onChange: (selected: Menu) => void;
};
const Menu = ({ onChange }: Props) => {
  const change = (subValue: string, value: string) => {
    onChange({ menu: value, subMenu: subValue });
  };
  return (
    <div className="menu">
      <div className="container">
        <div
          className={classNames("icon-home menu-left icon")}
          onClick={() => change("", "")}
        ></div>
        <div className="menu-main">
          {menu.map(({ text, value, subValue }) => (
            <Dropdown
              text={text}
              key={value}
              options={subValue}
              onDropdownChange={(subValue: string) => change(subValue, value)}
              className="menu-dropdown"
            />
          ))}
        </div>
        <div className="menu-right">
          <div
            className={classNames("icon-bell notification icon")}
            onClick={() => change("", "notification")}
          ></div>
          <div className="profile" onClick={() => change("", "profile")}>
            <div className={classNames("icon-person icon")}></div>
            <div className="profile-name">{"Phùng Hữu Đạt"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
