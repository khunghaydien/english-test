import { useNavigate } from "react-router";
import Menu, { Menu as MenuProps } from "./menu";
import Advertisement from "./advertisement";
import { styled } from "styled-components";
type Props = {
  page: React.ReactNode;
  className?: string;
  isTest?: boolean;
};
const User = ({ page, className = "user-page", isTest = false }: Props) => {
  const navigate = useNavigate();
  const onChange = (selected: MenuProps) => {
    navigate(
      selected.subMenu
        ? `${selected.menu}-${selected.subMenu}`
        : `${selected.menu}`
    );
  };
  if (isTest) return <div className={className}>{page}</div>;
  return (
    <div className={className}>
      <Menu onChange={onChange} />
      <MainSection className="container">
        <div className="page">{page}</div>
        <div className="left-page">
          <Advertisement />
        </div>
      </MainSection>
      <Footer className="footer"></Footer>
    </div>
  );
};
export default User;
const MainSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: calc(100vh - 200px);
  .page {
    width: 800px;
  }
  .left-page {
    width: 400px;
    background: #f5f5f5;
    height: calc(100vh - 200px);
  }
`;
const Footer = styled.div`
  height: 150px;
  width: 100%;
  background: #294563;
`;
