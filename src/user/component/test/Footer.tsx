import classNames from "classnames";
import CountdownTimer from "../../common/CountdownTimer";
import Palette from "../../common/Palette";
import Button from "../../../common/button";
const ROOT = "test-footer";
const listAction = [
  {
    value: "send",
    text: "Gửi",
    icon: "icon-send",
  },
  {
    value: "review",
    text: "Xem lại",
    icon: "icon-library_books",
  },
  {
    value: "result",
    text: "Đáp án",
    icon: "icon-question_answer",
  },
];
type Props = {
  onActionClick: (value: string) => void;
};
const Footer = ({ onActionClick }: Props) => {
  return (
    <div className={classNames(`${ROOT}`)}>
      <div className={`${ROOT}-container`}>
        <Palette
          className={`${ROOT}-palette`}
          listAnswered={[1, 2, 3, 4]}
          totalQuestion={40}
        />
        <CountdownTimer started={2400} className={`${ROOT}-timer`} />
        <div className={`${ROOT}-action`}>
          {listAction.map(({ value, icon, text }, idx) => (
            <Button
              key={idx}
              icon={icon}
              value={text}
              onClick={() => onActionClick(value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
