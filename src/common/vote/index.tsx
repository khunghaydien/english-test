import classNames from "classnames";
import "./index.scss";
type Props = {
  className?: string;
  star: number;
  quantity: number;
};
const Vote = ({ star, quantity, className }: Props) => {
  return (
    <div className={classNames("vote", className)}>
      {Array.from({ length: star }, (_, index) => (
        <div key={index} className="star"></div>
      ))}
      <div className="quantity">{`(${quantity} votes)`}</div>
    </div>
  );
};
export default Vote;
