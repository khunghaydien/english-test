import Advertisement from "@/common/advertisement";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const MainSection = () => {
  return (
    <MainSectionComponent className="container">
      <div className="page">
        <Outlet></Outlet>
      </div>
      <div className="left-page">
        <Advertisement />
      </div>
    </MainSectionComponent>
  );
};
export default MainSection;
const MainSectionComponent = styled.div`
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
