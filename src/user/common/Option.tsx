import classNames from "classnames";
import { useState } from "react";
import { styled } from "styled-components";

type OptionProps = {
  id: string;
  icon?: string;
  name: string;
};
type Props = {
  listOption: OptionProps[];
  onClick: (id: string) => void;
};
const Option = ({ listOption, onClick }: Props) => {
  const [selected, setSelected] = useState(listOption[0].id);
  const onClickOption = (id: string) => {
    setSelected(id);
    onClick(selected);
  };
  return (
    <>
      {listOption.map(({ icon, id, name }) => (
        <OptionItem
          key={id}
          className={classNames("option-item", { ["active"]: id === selected })}
          onClick={() => onClickOption(id)}
        >
          <div className={classNames("icon", icon)}></div>
          <div className="name">{name}</div>
        </OptionItem>
      ))}
    </>
  );
};
export default Option;

const OptionItem = styled.div`
  cursor: pointer;
  &.active {
    color: #2dc100;
  }
`;
