import { useState } from "react";
import Button from "../button";
import SelectField from "../field/SelectField";
import classNames from "classnames";
import "./index.scss";

type Props = {
  className?: string;
  quantity: number;
};
const paginations = { 3: { text: "3" }, 5: { text: "5" }, 10: { text: "10" } };

const Pagination = ({ quantity, className }: Props) => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(quantity / itemPerPage);
  let listPage = Array.from({ length: totalPage }, (_, index) => index + 1);
  const prePage = currentPage === 1 ? currentPage : currentPage - 1;
  let isDot = false;
  if (prePage + 3 >= totalPage) {
    let tmpListPage = [];
    for (let i = totalPage; i >= totalPage - 3 && i > 0; i--) {
      tmpListPage.unshift(i);
    }
    listPage = tmpListPage;
  } else {
    listPage = [prePage, prePage + 1, prePage + 2];
    isDot = true;
  }
  const onPaginationChange = (selected: string) => {
    setItemPerPage(parseInt(selected));
  };
  const onClickFirstPage = () => {
    setCurrentPage(1);
  };
  const onClickPrePage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };
  const onClickPage = (page?: number) => {
    if (page && page <= totalPage) setCurrentPage(page);
  };
  const onClickLastPage = () => {
    setCurrentPage(totalPage);
  };
  const onClickNextPage = () => {
    if (currentPage < totalPage)
      setCurrentPage((currentPage) => currentPage + 1);
  };
  return (
    <div className={classNames("pagination", className)}>
      <div className="pagination-container">
        <Button
          value="trang đầu"
          className="btn-first"
          onClick={onClickFirstPage}
        />
        <Button
          value="trang trước"
          className="btn-previous"
          onClick={onClickPrePage}
        />
        {listPage.map((page, idx) => (
          <Button
            key={idx}
            value={page.toString()}
            className={classNames("btn-page", {
              ["active"]: page === currentPage,
            })}
            onClick={() => onClickPage(page)}
          />
        ))}
        {isDot && (
          <>
            <div className="dot">...</div>
            <Button
              value={totalPage.toString()}
              className={classNames("btn-page", {
                ["active"]: totalPage === currentPage,
              })}
              onClick={() => onClickPage(totalPage)}
            />
          </>
        )}
        <Button
          value="trang tiếp"
          className="btn-next"
          onClick={onClickNextPage}
        />
        <Button
          value="trang cuối"
          className="btn-last"
          onClick={onClickLastPage}
        />
        <SelectField
          options={paginations}
          onChange={onPaginationChange}
          selected={itemPerPage.toString()}
          width="40px"
        />
      </div>
    </div>
  );
};
export default Pagination;
