import Button from "@/common/button";
import Option, { Option as OptionProps } from "@/common/field/Option";
import Countdown from "@/common/countdown";
import Palette from "@/common/palette/Palette";
import Vote from "@/common/vote";
import classNames from "classnames";
import imgae from "@/assets/ielts-volume.jpg";
import { useState } from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
const actionList: OptionProps = {
  share: {
    icon: "icon-share",
    text: "Chia sẻ đề thi",
  },
  report: {
    icon: "icon-report",
    text: "Báo cáo lỗi sai",
  },
  download: {
    icon: "icon-download",
    text: "Tải về",
  },
  help: {
    icon: "icon-help",
    text: "Hướng dẫn",
  },
  save: {
    icon: "icon-save",
    text: "Lưu tạm",
  },
  exit: {
    icon: "icon-exit_to_app",
    text: "Thoát",
  },
};
const listAction: OptionProps = {
  send: {
    text: "Gửi",
    icon: "icon-send",
  },
  review: {
    text: "Xem lại",
    icon: "icon-library_books",
  },
  result: {
    text: "Đáp án",
    icon: "icon-question_answer",
  },
};
const ROOT = "exam";
const Exam = () => {
  const [isShowList, setIsShowList] = useState(false);
  const onMouseLeaveAction = () => {
    setIsShowList(false);
  };
  const onMouseEnterAction = () => {
    setIsShowList(true);
  };
  const onChange = (value: string) => {
    console.log(value);
  };
  const mocHeader = {
    name: "Master IELTS General Training Volume 1",
    imageUrl: imgae,
    imageAlt: "test image",
    vote: {
      star: 3,
      quantity: 1000,
    },
    viewed: 12312,
    published: "07 Nov 2018",
    tested: 923452,
  };
  return (
    <div className="exam">
      <div className={`${ROOT}-header`}>
        <div className={`${ROOT}-header-container`}>
          <div className={`${ROOT}-header-info`}>
            <div className={`${ROOT}-header-image`}>
              <img src={mocHeader.imageUrl} alt={mocHeader.imageAlt} />
            </div>
            <div>
              <div className={`${ROOT}-header-name`}>{mocHeader.name}</div>
              <Vote
                star={mocHeader.vote.star}
                quantity={mocHeader.vote.quantity}
              />
            </div>
          </div>
          <div className={`${ROOT}-header-detail`}>
            <div className={`${ROOT}-header-published`}>
              <span className="icon-date_range icon"></span>
              <span>Ngày đăng: </span>
              <span>{mocHeader.published}</span>
            </div>
            <div className={`${ROOT}-header-viewed`}>
              <span className="icon-eye icon"></span>
              <span>Lượt xem: </span>
              <span>{mocHeader.viewed}</span>
            </div>
            <div className={`${ROOT}-header-tested`}>
              <span className="icon-done icon"></span>
              <span>Lượt thi: </span>
              <span>{mocHeader.tested}</span>
            </div>
          </div>
          <div
            className={`${ROOT}-header-action`}
            onMouseLeave={onMouseLeaveAction}
            onMouseEnter={onMouseEnterAction}
          >
            <div
              className={classNames(
                isShowList ? "icon-close" : "icon-reorder",
                `${ROOT}-header-action--icon`
              )}
            ></div>
            {isShowList && (
              <div className={`${ROOT}-header-action--list`}>
                <Option options={actionList} onChange={onChange} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet></Outlet>
      <div className={`${ROOT}-footer`}>
        <div className={`${ROOT}-footer-container`}>
          <Palette
            className={`${ROOT}-footer-palette`}
            listAnswered={[1, 2, 3, 4]}
            totalQuestion={40}
          />
          <Countdown started={2400} className={`${ROOT}-footer-timer`} />
          <div className={`${ROOT}-footer-action`}>
            {Object.keys(listAction).map((key, idx) => (
              <Button
                key={idx}
                icon={listAction[key]?.icon}
                value={listAction[key]?.text}
                onClick={() => onChange(key)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exam;
