import classNames from "classnames";
import List from "./List";
import { Props as ItemProps } from "./Item";
import image from "@/assets/ielts-volume.jpg";
import "./index.scss";
const advertisements: ItemProps[] = [
  {
    imageUrl: image,
    imageAlt: "Listening Tips",
    title: "How to Do Completion Type of Questions in IELTS Listening?",
    subTitle:
      "In the IELTS listening exam, you can find completion type of questions in",
    views: 36917,
    type: "Listening Tips",
  },
  {
    imageUrl: image,
    imageAlt: "Listening Tips",
    title: "How to Do Completion Type of Questions in IELTS Listening?",
    subTitle:
      "In the IELTS listening exam, you can find completion type of questions in",
    views: 36917,
    type: "Listening Tips",
  },
  {
    imageUrl: image,
    imageAlt: "Listening Tips",
    title: "How to Do Completion Type of Questions in IELTS Listening?",
    subTitle:
      "In the IELTS listening exam, you can find completion type of questions in",
    views: 36917,
    type: "Listening Tips",
  },
  {
    imageUrl: image,
    imageAlt: "Listening Tips",
    title: "How to Do Completion Type of Questions in IELTS Listening?",
    subTitle:
      "In the IELTS listening exam, you can find completion type of questions in",
    views: 36917,
    type: "Listening Tips",
  },
  {
    imageUrl: image,
    imageAlt: "Listening Tips",
    title: "How to Do Completion Type of Questions in IELTS Listening?",
    subTitle:
      "In the IELTS listening exam, you can find completion type of questions in",
    views: 36917,
    type: "Listening Tips",
  },
];
const Advertisement = () => {
  const onRefresh = () => {
    console.log("change list");
  };
  return (
    <div className={classNames("advertisement")}>
      <List
        className="most-view"
        name="Most popular IELTS tips"
        advertisements={advertisements}
        onClick={onRefresh}
      />
    </div>
  );
};
export default Advertisement;
