import classNames from "classnames";
import CountdownTimer from "../../common/CountdownTimer";
import Palette from "../../common/Palette";

const Footer = () => {
  return (
    <div className={classNames("footer")}>
      <Palette />
      <CountdownTimer started={2400} />
      <div className="test-action"></div>
    </div>
  );
};
export default Footer;
