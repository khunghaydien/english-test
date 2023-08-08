import Option from "../../common/Option";

type Props = {
  title: string;
  type: string;
};
const optionList = [
  {
    id: "1",
    icon: "icon-library_books",
    name: "Toàn bộ đề thi",
  },
  {
    id: "2",
    icon: "icon-person",
    name: "Đề thi học thuật",
  },
  {
    id: "3",
    icon: "icon-people",
    name: "Đề thi chung",
  },
];
const Header = ({ title }: Props) => {
  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="header-select">
        <Option
          listOption={optionList}
          onClick={(id: string) => console.log(id)}
        />
      </div>
    </div>
  );
};

export default Header;
