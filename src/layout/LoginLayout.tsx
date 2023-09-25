import logo from "@/assets/logo.svg";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const LoginLayout = () => {
    return (
        <div className="login">
            <LogoLoginLayout>
                <img src={logo} alt="logo" />
            </LogoLoginLayout>
            <Outlet></Outlet>
        </div>
    );
};
export default LoginLayout;
const LogoLoginLayout = styled.div`
    width: 160px;
    margin: 50px 0;
`