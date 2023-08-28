import classNames from "classnames";
import "./Palette.scss";
import { useState } from "react";
type Props = {
  className?: string;
  totalQuestion: number;
  listAnswered: Array<Number>;
};
const Palette = ({ className, totalQuestion, listAnswered }: Props) => {
  const [isPalette, setIsPalette] = useState(false);
  return (
    <div
      className={classNames("palette", className)}
      onMouseLeave={() => setIsPalette(false)}
    >
      <div className="palette-title" onClick={() => setIsPalette(true)}>
        Question Palette
        <div
          className={classNames(
            isPalette ? "icon-angle-up" : "icon-angle-down"
          )}
        ></div>
      </div>
      {isPalette && (
        <div className="palette-list">
          {Array.from({ length: totalQuestion }, (_, index) => (
            <div
              key={index}
              className={classNames(`palette-item`, {
                [`palette-item--active`]: listAnswered.includes(index + 1),
              })}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Palette;
