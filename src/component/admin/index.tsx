import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";
import "./index.scss";
import { Theme } from "@/store/reducer/common/UI";
import { useEffect } from "react";
import Profile from "@/common/profile";
import image from "@/assets/ielts-volume.jpg";
const sidebarItem = [
  {
    name: "Exam management",
    path: "exam-management",
  },
  {
    name: "User",
    path: "user",
  },
];
type Props = {
  className?: string;
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};
const Admin = ({ className, theme, changeTheme }: Props) => {
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  const handleChangeTheme = () => {
    if (theme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };
  return (
    <div className={classNames("admin-page", className)}>
      <nav className="admin-page-sidebar">
        <div className="admin-page-sidebar-list">
          {sidebarItem.map(({ name, path }) => (
            <NavLink
              key={path}
              to={`${path}`}
              className={({ isActive, isPending }) =>
                classNames("admin-page-sidebar--item", {
                  ["active"]: isActive,
                  ["pending"]: isPending,
                })
              }
            >
              {name ? name : "No Name"}
            </NavLink>
          ))}
          <div className="admin-page-sidebar-footer">
            <div className="admin-page-sidebar-list">
              <div className="admin-page-sidebar-items">
                <div
                  onClick={handleChangeTheme}
                  className="admin-page-sidebar--item"
                >
                  {theme}
                </div>
              </div>
              <Profile
                className="admin-page-sidebar--item"
                userAvatar={image}
                userName="Phùng Hữu Đạt"
                onChange={(value: string) => console.log(value)}
                userId={"1"}
                isOptionUp
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="admin-page-main">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
