import classNames from "classnames";
import Dropdown from "../field/Dropdown";
import Profile from "../profile";
import { menu } from "@/const/Menu";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <NavLink
          to={""}
          className={classNames("icon-home menu-left icon")}
        ></NavLink>
        <div className="menu-main">
          {menu.map(({ text, value, subValue }) => (
            <Dropdown
              text={text}
              key={value}
              options={subValue}
              className="menu-dropdown"
            />
          ))}
        </div>
        <div className="menu-right">
          <div
            className={classNames("icon-bell notification icon")}
            onClick={() => console.log("notification")}
          ></div>
          <Profile
            userId="1"
            userAvatar=""
            userName="Phùng Hữu Đạt"
            onChange={(value: string) => console.log(value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Menu;
