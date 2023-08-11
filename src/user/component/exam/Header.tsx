import { useEffect, useState } from "react";
import SelectField from "../../common/field/SelectField";
import classNames from "classnames";
import { ielts, ieltsSortBy } from "../../const/exam";

type Props = {
  title: string;
  type: string;
};

const HeaderExam = ({ title }: Props) => {
  const [selected, setSelected] = useState({
    type: ielts[0].value,
    sortBy: [ieltsSortBy[0].value],
  });

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const onChangeType = (type: string) => {
    setSelected({ ...selected, type });
  };

  const onChangeSort = (sortBy: string[]) => {
    setSelected({ ...selected, sortBy });
  };
  const ROOT = "exam-header";

  return (
    <div className={ROOT}>
      <div className={`${ROOT}-title`}>{title}</div>
      <div className={`${ROOT}-sort`}>
        {ielts.map(({ value, text, icon }) => (
          <div
            className={classNames(`${ROOT}-sort--type`, {
              ["active"]: value === selected.type,
            })}
            key={value}
            onClick={() => onChangeType(value)}
          >
            <div className={classNames("icon", icon)}></div>
            <div className="text">{text}</div>
          </div>
        ))}
        <SelectField
          className={`${ROOT}-sort--by`}
          options={ieltsSortBy}
          onChange={onChangeSort}
          selected={selected.sortBy}
        />
      </div>
    </div>
  );
};

export default HeaderExam;
