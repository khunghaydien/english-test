import Button from "@/common/button";
import Option, { Option as OptionProps } from "@/common/field/Option";
import Countdown from "@/common/countdown";
import Palette from "@/common/palette/Palette";
import classNames from "classnames";
import { useState } from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import ExamSet from "@/common/exam-set";
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
  return (
    <div className="exam">
      <div className={`${ROOT}-header`}>
        <div className={`${ROOT}-header-container`}>
          <ExamSet />
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
