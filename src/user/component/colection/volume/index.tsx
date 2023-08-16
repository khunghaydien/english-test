import classNames from "classnames";
import { Volume as VolumeProps } from "../../../model/Volume";
import "./index.scss";
const ROOT = "volume";
type Props = {
  className?: string;
  volumes: VolumeProps[];
  onClickVolume: (volumeId: string) => void;
};
const Volume = ({ className, volumes, onClickVolume }: Props) => {
  return (
    <div className={classNames(`${ROOT}`, className)}>
      {volumes.map(({ volumeId, volumeName, isViewed }) => (
        <div
          key={volumeId}
          className={`${ROOT}-item`}
          onClick={() => onClickVolume(volumeId)}
        >
          <div className={`${ROOT}-item--name`}>
            <div className={`${ROOT}-item--text`}>{volumeName}</div>
            {isViewed && (
              <div
                className={classNames("icon-done", `${ROOT}-item--viewed`)}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Volume;
