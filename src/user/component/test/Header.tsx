import { useState } from "react";
import Vote from "../../common/Vote";
import "./index.scss";
import classNames from "classnames";
import Option from "../../../common/field/Option";
const ROOT = "test-header";
const actionList = [
  {
    value: "share",
    icon: "icon-share",
    text: "Chia sẻ đề thi",
  },
  {
    value: "report",
    icon: "icon-report",
    text: "Báo cáo lỗi sai",
  },
  {
    value: "download",
    icon: "icon-download",
    text: "Tải về",
  },
  {
    value: "help",
    icon: "icon-help",
    text: "Hướng dẫn",
  },
  {
    value: "save",
    icon: "icon-save",
    text: "Lưu tạm",
  },
  {
    value: "exit",
    icon: "icon-exit_to_app",
    text: "Thoát",
  },
];
type Props = {
  name: string;
  imageUrl: string;
  imageAlt: string;
  vote: {
    star: number;
    quantity: number;
  };
  viewed: number;
  published: string;
  tested: number;
  onClickAction: (value: string) => void;
};
const Header = ({
  name,
  imageUrl,
  imageAlt,
  vote,
  viewed,
  published,
  tested,
  onClickAction,
}: Props) => {
  const [isShowList, setIsShowList] = useState(false);
  const onMouseLeaveAction = () => {
    setIsShowList(false);
  };
  const onMouseEnterAction = () => {
    setIsShowList(true);
  };
  const onChange = (value: string[]) => {
    onClickAction(value[0]);
  };
  return (
    <div className={`${ROOT}`}>
      <div className={`${ROOT}-container`}>
        <div className={`${ROOT}-info`}>
          <div className={`${ROOT}-image`}>
            <img src={imageUrl} alt={imageAlt} />
          </div>
          <div>
            <div className={`${ROOT}-name`}>{name}</div>
            <Vote star={vote.star} quantity={vote.quantity} />
          </div>
        </div>
        <div className={`${ROOT}-detail`}>
          <div className={`${ROOT}-published`}>
            <span className="icon-date_range icon"></span>
            <span>Ngày đăng: </span>
            <span>{published}</span>
          </div>
          <div className={`${ROOT}-viewed`}>
            <span className="icon-eye icon"></span>
            <span>Lượt xem: </span>
            <span>{viewed}</span>
          </div>
          <div className={`${ROOT}-tested`}>
            <span className="icon-done icon"></span>
            <span>Lượt thi: </span>
            <span>{tested}</span>
          </div>
        </div>
        <div
          className={`${ROOT}-action`}
          onMouseLeave={onMouseLeaveAction}
          onMouseEnter={onMouseEnterAction}
        >
          <div
            className={classNames(
              isShowList ? "icon-close" : "icon-reorder",
              `${ROOT}-action--icon`
            )}
          ></div>
          {isShowList && (
            <div className={`${ROOT}-action--list`}>
              <Option options={actionList} onChange={onChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
