import classNames from "classnames";

export type Props = {
  className?: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  type: string;
  views: number;
};
const Item = ({
  className,
  imageUrl,
  imageAlt,
  title,
  subTitle,
  type,
  views,
}: Props) => {
  return (
    <div className={classNames("advertisement-item", className)}>
      <div className="advertisement-item--image">
        <img className="img" src={imageUrl} alt={imageAlt} />
      </div>
      <div className="advertisement-item--info">
        <div className="advertisement-item--title">{title}</div>
        <div className="advertisement-item--sub-title">{subTitle}</div>
        <div className="advertisement-item--footer">
          <div className="advertisement-item--type">
            <span className="icon-tag"></span>
            {type}
          </div>
          <div className="advertisement-item--views">
            <span className="icon-eye"></span>
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
