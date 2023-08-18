import Global from "@/container/common/global";
import "./index.scss";
import classNames from "classnames";
import { useEffect } from "react";
type Props = {
  reading: any;
  fetchReading: () => void;
};
export default function Reading({ reading, fetchReading }: Props) {
  useEffect(() => {
    fetchReading();
  }, []);
  return (
    <div className={classNames("reading-page")}>
      <Global />
      {reading}
    </div>
  );
}
