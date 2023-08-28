import { useNavigate } from "react-router";
import Advertisement from "../../common/advertisement";
import { styled } from "styled-components";
import Profile from "@/common/profile";
import classNames from "classnames";
import Dropdown from "@/common/field/Dropdown";
import { menu } from "@/const/Menu";
import "./index.scss";
import { Outlet } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const onChange = (selected: string) => {
    navigate(selected);
  };
  return (
    <div className="home-page">
      <div className="menu">
        <div className="container">
          <div
            className={classNames("icon-home menu-left icon")}
            onClick={() => onChange("")}
          ></div>
          <div className="menu-main">
            {menu.map(({ text, value, subValue }) => (
              <Dropdown
                text={text}
                key={value}
                options={subValue}
                onDropdownChange={(subValue: string) =>
                  onChange(`${value}-${subValue}`)
                }
                className="menu-dropdown"
              />
            ))}
          </div>
          <div className="menu-right">
            <div
              className={classNames("icon-bell notification icon")}
              onClick={() => onChange("notification")}
            ></div>
            <Profile
              userId="1"
              userAvatar=""
              userName="Phùng Hữu Đạt"
              onChange={(value: string) => onChange(value)}
            />
          </div>
        </div>
      </div>
      <MainSection className="container">
        <div className="page">
          <Outlet></Outlet>
        </div>
        <div className="left-page">
          <Advertisement />
        </div>
      </MainSection>
      <Footer className="footer"></Footer>
    </div>
  );
};
export default Home;
const MainSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  .page {
    width: 800px;
  }
  .left-page {
    width: 400px;
    background: #f5f5f5;
  }
`;
const Footer = styled.div`
  height: 150px;
  width: 100%;
  background: #294563;
`;
