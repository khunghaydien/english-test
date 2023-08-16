import { useNavigate } from "react-router";
import Menu, { Menu as MenuProps } from "../common/menu";
import Advertisement from "../common/advertisement";
import { styled } from "styled-components";
type Props = {
  page: React.ReactNode;
  className?: string;
};
const Default = ({ page, className = "default-page" }: Props) => {
  const navigate = useNavigate();
  const onChange = (selected: MenuProps) => {
    navigate(
      selected.subMenu
        ? `${selected.menu}-${selected.subMenu}`
        : `${selected.menu}`
    );
  };
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
export default Default;
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
