import { styled } from "styled-components";
import Menu from "@/common/menu";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
    return (
        <div className="home-page">
            <Menu />
            <Outlet></Outlet>
            <Footer className="footer"></Footer>
        </div>
    );
};
export default DefaultLayout;

const Footer = styled.div`
  height: 150px;
  width: 100%;
  background: #294563;
`;
