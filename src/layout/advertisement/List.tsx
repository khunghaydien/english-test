import classNames from "classnames";
import Item, { Props as ItemProps } from "./Item";
type Props = {
  name: string;
  onClick: () => void;
  advertisements: ItemProps[];
  className?: string;
};
const List = ({ name, onClick, className, advertisements }: Props) => {
  const onRefresh = () => {
    onClick;
  };
  return (
    <div className={classNames(className)}>
      <div className="advertisement-list--header">
        <div className="advertisement-list--name">{name}</div>
        <div className="advertisement-list--refresh" onClick={onRefresh}>
          <span className="icon-refresh"></span> Refresh
        </div>
      </div>
      <div className="advertisement-list--item">
        {advertisements.map(
          (
            { imageUrl, imageAlt, title, subTitle, views, className, type },
            idx
          ) => (
            <Item
              key={idx}
              className={className}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              title={title}
              subTitle={subTitle}
              type={type}
              views={views}
            />
          )
        )}
      </div>
    </div>
  );
};
export default List;
