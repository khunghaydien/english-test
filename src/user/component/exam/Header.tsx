import { useEffect, useState } from "react";
// import Option from "../../common/Option";
import SelectField from "../../common/field/SelectField";

type Props = {
  title: string;
  type: string;
};
const examTypes = [
  {
    value: "all",
    icon: "icon-library_books",
    text: "Toàn bộ đề thi",
  },
  {
    value: "academic",
    icon: "icon-person",
    text: "Đề thi học thuật",
  },
  {
    value: "general",
    icon: "icon-people",
    text: "Đề thi chung",
  },
];
const examSorts = [
  {
    value: "newest",
    text: "Mới nhất",
  },
  {
    value: "popular",
    text: "Phổ biến",
  },
  {
    value: "highRanking",
    text: "Thứ hạng cao",
  },
  {
    value: "newest",
    text: "Mới nhất",
  },
  {
    value: "popular",
    text: "Phổ biến",
  },
  {
    value: "highRanking",
    text: "Thứ hạng cao",
  },
  {
    value: "newest",
    text: "Mới nhất",
  },
  {
    value: "popular",
    text: "Phổ biến",
  },
  {
    value: "highRanking",
    text: "Thứ hạng cao",
  },
  {
    value: "newest",
    text: "Mới nhất",
  },
  {
    value: "popular",
    text: "Phổ biến",
  },
  {
    value: "highRanking",
    text: "Thứ hạng cao",
  },
];
const Header = ({ title }: Props) => {
  const [selected, setSelected] = useState({
    type: [examTypes[0].value],
    sortBy: [examSorts[0].value],
  });

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  // const onChangeType = (type: string[]) => {
  //   setSelected({ ...selected, type });
  // };

  const onChangeSort = (sortBy: string[]) => {
    setSelected({ ...selected, sortBy });
  };

  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="header-select">
        {/* <Option
          options={examTypes}
          onChange={onChangeType}
          selected={selected.type}
          className="type"
        /> */}
        <SelectField
          className="sort-by"
          options={examSorts}
          onChange={onChangeSort}
          selected={selected.sortBy}
        />
      </div>
    </div>
  );
};

export default Header;
