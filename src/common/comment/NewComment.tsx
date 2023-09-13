import image from "@/assets/logo.svg";
import Emotion from "./Emotion";
import { useState } from "react";
import classNames from "classnames";
const NewComment = () => {
  const onClick = (value: string) => {
    console.log(value);
  };
  const [isEmotion, setIsEmotion] = useState(false);
  return (
    <>
      <div className="avatar">
        <img src={image} alt="" />
      </div>
      <div className="comment">
        <div className="comment-space"></div>
        <div className="comment-action">
          <div>
            <div className="icon-add"></div>
            <div className="">Aa</div>
            <div className="">@</div>
            <div
              className={classNames("icon-smile-o", { ["active"]: isEmotion })}
              onClick={() => setIsEmotion(!isEmotion)}
            ></div>
          </div>
          <div className="icon-send"></div>
        </div>
        {isEmotion && <Emotion onClick={onClick} />}
      </div>
    </>
  );
};

export default NewComment;
