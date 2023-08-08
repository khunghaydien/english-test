import classNames from "classnames";
import { useState } from "react";
import Option from "../../user/common/Option";

const actionList = [
  {
    id: "1",
    icon: "icon-share",
    name: "Chia sẻ đề thi",
  },
  {
    id: "2",
    icon: "icon-report",
    name: "Báo cáo lỗi sai",
  },
  {
    id: "3",
    icon: "icon-download",
    name: "Tải về",
  },
  {
    id: "4",
    icon: "icon-help",
    name: "Hướng dẫn",
  },
  {
    id: "5",
    icon: "icon-save",
    name: "Lưu tạm",
  },
  {
    id: "6",
    icon: "icon-exit_to_app",
    name: "Thoát",
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
        <div className="option-list">
          <Option
            listOption={actionList}
            onClick={(id: string) => console.log(id)}
          />
        </div>
      )}
    </div>
  );
};

export default Action;
