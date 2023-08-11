import classNames from "classnames";
import Vote from "../../common/Vote";
import { Colection as ColectionProps } from "../../model/Volume";

type Props = {
  colections: ColectionProps[];
  className?: string;
};

const Colection = ({ colections, className }: Props) => {
  return (
    <div className={classNames("colection", className)}>
      {colections.map(({ colectionId, colectionName, vote, volumes }) => (
        <div key={colectionId} className="colection-item">
          <div className="colection-item--name">{colectionName}</div>
          <Vote
            star={vote.star}
            quantity={vote.quantity}
            className="colection-item--vote"
          />
          <div className="volume">
            {volumes.map(({ volumeId, volumeName, isViewed }) => (
              <div key={volumeId} className="volume-item">
                <div className="volume-item--name">
                  <div className="volume-item--text">{volumeName}</div>
                  {isViewed && (
                    <div
                      className={classNames("volume-item--viewed icon-done")}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Colection;
