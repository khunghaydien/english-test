import classNames from "classnames";
export type VolumeDetailProps = {
  published: string;
  views: number;
  testTaken: number;
};
type Props = {
  id: string;
  volumeDetail: VolumeDetailProps;
};
type VolumeDetailItemProps = {
  icon: string;
  label: string;
  content: any;
  className?: string;
};
const VolumeDetailItem = ({
  icon,
  label,
  content,
  className,
}: VolumeDetailItemProps) => {
  return (
    <div className={classNames(`volume-detail--item`, className)}>
      <div className={classNames("icon", icon)}></div>
      <div className="label">{label}: </div>
      {content}
    </div>
  );
};
const VolumeDetail = ({ volumeDetail }: Props) => {
  const { published, views, testTaken } = volumeDetail;
  const volumeDetailList = [
    {
      id: 1,
      icon: "icon-date_range",
      label: "Ngày đăng",
      content: published,
      className: "published",
    },
    {
      id: 2,
      icon: "icon-eye",
      label: "Lượt xem",
      content: views,
      className: "views",
    },
    {
      id: 3,
      icon: "icon-done",
      label: "Lượt thi",
      content: testTaken,
      className: "test-taken",
    },
  ];
  return (
    <div className="volume-detail">
      {volumeDetailList.map(({ icon, label, content, className, id }) => (
        <VolumeDetailItem
          key={id}
          icon={icon}
          label={label}
          content={content}
          className={className}
        />
      ))}
    </div>
  );
};
export default VolumeDetail;
