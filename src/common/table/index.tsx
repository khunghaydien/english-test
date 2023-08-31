import classNames from "classnames";
import "./table.scss";
import Column, { Props as ColumnProps } from "./Column";
import Row from "./Row";
import isNil from "lodash/isNil";
import { useState } from "react";
type Props = {
  columns: ColumnProps[];
  data: Array<Record<string, any>>;
  selected?: string[];
  onClickRow: (id: string, event: React.SyntheticEvent<Element>) => void;
  ellipsis?: boolean;
  useFilter?: boolean;
  emptyMessage?: string;
  isCheckbox?: boolean;
  maxSelection?: number;
};

const ROOT = "commons-table";
const Table = ({
  columns: columnList,
  data,
  selected: selectedList = [],
  onClickRow,
  ellipsis,
  useFilter,
  emptyMessage,
  isCheckbox,
  maxSelection,
}: Props) => {
  const [selected, setSelected] = useState(selectedList);
  const isSelected = (id: string): boolean => {
    return selected.includes(id);
  };
  const columns = Column(columnList);
  const renderHead = () => {
    return columns.map<React.ReactElement<"div">>((column) => {
      let style: React.CSSProperties = {
        flexBasis: column.width,
        flexShrink: column.shrink ? 1 : 0,
        flexGrow: column.grow ? 1 : 0,
        minWidth: ellipsis ? 0 : "unset",
      };
      const className = classNames(`${ROOT}__cell-head`, {
        [`${ROOT}__cell-head--${column.className}`]:
          column.className && !useFilter,
        [`${ROOT}__cell-filter--${column.className}`]:
          column.className && useFilter,
      });
      return (
        <div key={column.name} style={style} className={className}>
          {useFilter && column.renderFilter
            ? column.renderFilter()
            : column.name}
        </div>
      );
    });
  };
  const onChangeRowSelection = ({ id, check }: any) => {
    const newSelected = check
      ? [...selected, id]
      : selected.filter((x) => x !== id);
    setSelected(newSelected);
  };
  const renderBody = () => {
    if (data.length > 0)
      return data.map<React.ReactElement<typeof Row>>((data) => (
        <Row
          ellipsis={ellipsis || false}
          columns={columns}
          data={data}
          key={data.id}
          id={data.id}
          onChangeSelection={onChangeRowSelection}
          selected={isSelected(data.id)}
          onClickRow={onClickRow}
          isCheckbox={isCheckbox || data.isCheckbox}
          numSelected={selected.length}
          maxSelection={maxSelection}
          className={data.className}
        />
      ));
    else return <>{emptyMessage}</>;
  };
  const renderCheckbox = () => {
    const onClickLabel = (e: any) => {
      e.stopPropagation();
      (e as React.FocusEvent<HTMLInputElement>).target.focus();
    };

    const onChangeAllSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSelected = e.target.checked
        ? data.map((object) => object.id)
        : [];
      setSelected(newSelected);
    };
    const checked =
      selected &&
      (selected.length >= data.length ||
        (!isNil(maxSelection) && selected.length >= maxSelection));

    return (
      <label
        onClick={onClickLabel}
        className={classNames(
          `${ROOT}__head-cell`,
          `${ROOT}__cell-head--checkbox`
        )}
      >
        <input
          type="checkbox"
          onChange={onChangeAllSelection}
          checked={checked}
        />
      </label>
    );
  };
  return (
    <div className={ROOT}>
      <div className={`${ROOT}__head`}>
        <div className={`${ROOT}__head-row`}>
          {isCheckbox && renderCheckbox()}
          {renderHead()}
        </div>
      </div>
      <div
        className={classNames(`${ROOT}__body`, {
          [`${ROOT}__body--use-filter`]: useFilter,
        })}
        data-testid={`${ROOT}__body`}
      >
        {renderBody()}
      </div>
    </div>
  );
};

export default Table;
