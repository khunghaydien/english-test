import classNames from "classnames";
import { useState } from "react";
import Option from "./../../user/common/field/Option";

const actionList = [
  {
    value: "1",
    icon: "icon-share",
    text: "Chia sẻ đề thi",
  },
  {
    value: "2",
    icon: "icon-report",
    text: "Báo cáo lỗi sai",
  },
  {
    value: "3",
    icon: "icon-download",
    text: "Tải về",
  },
  {
    value: "4",
    icon: "icon-help",
    text: "Hướng dẫn",
  },
  {
    value: "5",
    icon: "icon-save",
    text: "Lưu tạm",
  },
  {
    value: "6",
    icon: "icon-exit_to_app",
    text: "Thoát",
  },
];
const Action = () => {
  const [isShowList, setIsShowList] = useState(false);
  const onMouseEnter = () => {
    setIsShowList(true);
  };
  const onmouseleave = () => {
    setIsShowList(false);
  };
  const onChange = (value: string[]) => {
    console.log(value);
  };
  return (
    <div
      className="action"
      onMouseLeave={onmouseleave}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={classNames(
          isShowList ? "icon-close" : "icon-reorder",
          "action-icon"
        )}
      ></div>
      {isShowList && (
        <div className="action-list">
          <Option options={actionList} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default Action;
