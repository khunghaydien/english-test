import classNames from "classnames";
import { Vote as VoteProps } from "../../model/Volume";
import "./Vote.scss";
type Props = {
  className?: string;
} & VoteProps;
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
