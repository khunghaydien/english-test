import { Colection as ColectionProps } from "../../model/Volume";
import Vote from "../../common/Vote";
import Volume from "./volume";
type Props = {
  colections: ColectionProps[];
  onClickVolume: (volumeId: string) => void;
};
const ROOT = "test-colection-body";
const Body = ({ colections, onClickVolume }: Props) => {
  return (
    <div className={`${ROOT}`}>
      {colections.map(
        ({ colectionId, colectionName, vote, volumes, imageUrl, imageAlt }) => (
          <div className={`${ROOT}--container`} key={colectionId}>
            <div className={`${ROOT}--image`}>
              <img src={imageUrl} alt={imageAlt} />
            </div>
            <div key={colectionId} className={`${ROOT}-item`}>
              <div className={`${ROOT}-item--name`}>{colectionName}</div>
              <Vote
                star={vote.star}
                quantity={vote.quantity}
                className={`${ROOT}-item--vote`}
              />
              <Volume volumes={volumes} onClickVolume={onClickVolume} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Body;
