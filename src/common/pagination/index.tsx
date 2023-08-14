import { useState } from "react";
import Button from "../button";
import SelectField from "../field/SelectField";
import classNames from "classnames";
import "./index.scss";

type Props = {
  className?: string;
  quantity: number;
};
const paginations = [
  {
    value: "3",
    text: "3",
  },
  {
    value: "5",
    text: "5",
  },
  {
    value: "10",
    text: "10",
  },
  {
    value: "15",
    text: "15",
  },
  {
    value: "20",
    text: "20",
  },
];
const Pagination = ({ quantity, className }: Props) => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let listCurrentPage = [currentPage - 1, currentPage, currentPage + 1];

  const totalPage = () => {
    return Math.ceil(quantity / itemPerPage);
  };
  const onPaginationChange = (selected: string[]) => {
    setItemPerPage(parseInt(selected[0]));
  };
  return (
    <div className={classNames("pagination", className)}>
      <Button value="trang đầu" onClick={() => setCurrentPage(1)} />
      <Button
        value="trang trước"
        onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
      />
      {listCurrentPage.map((item, idx) => (
        <Button
          key={idx}
          value={item.toString()}
          onClick={() => setCurrentPage(item)}
        />
      ))}
      {totalPage() - listCurrentPage[2] > 0 && (
        <>
          <div className="dot">...</div>
          <Button
            value={totalPage().toString()}
            onClick={() => setCurrentPage(totalPage)}
          />
        </>
      )}
      <Button
        value="trang tiếp"
        onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
      />
      <Button value="trang cuối" onClick={() => setCurrentPage(totalPage)} />

      <SelectField
        options={paginations}
        onChange={onPaginationChange}
        selected={[itemPerPage.toString()]}
        width="40px"
      />
    </div>
  );
};
export default Pagination;
