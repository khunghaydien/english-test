import classNames from "classnames";
import { Props as ColumnProps } from "./Column";
import { isNil, isArray } from "lodash";
type Props = {
  data: Record<string, any>;
  columns: ColumnProps[];
  selected: boolean;
  onChangeSelection: (value: { id: string; check: boolean }) => void;
  id: string;
  ellipsis: boolean;
  onClickRow: (
    id: string,
    arg1:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<Element>
      | React.FocusEvent<HTMLInputElement>
  ) => void;
  isCheckbox?: boolean;
  numSelected?: number;
  maxSelection?: number;
  className?: string;
};
const ROOT = "commons-table-body-row";
const HANDLE_KEYPRESS_CODE = ["Enter", " "];
const Row = ({
  data,
  columns,
  selected,
  onChangeSelection,
  id,
  ellipsis,
  onClickRow,
  isCheckbox,
  numSelected,
  maxSelection,
  className,
}: Props) => {
  const getValue = (data: Record<string, any>, key: string | string[]): any => {
    if (isArray(key) && Array.isArray(key)) {
      const value: any = null;
      key.forEach((k) => {
        value[k] = data[k];
      });
      return value;
    } else {
      return data[key];
    }
  };
  const renderItem = (column: ColumnProps): React.ReactElement<any> => {
    const className = classNames(`${ROOT}__cell`, {
      [`${ROOT}__cell--addon`]: column.isAddon,
    });
    let style: React.CSSProperties = {
      flexBasis: column.width,
      flexShrink: column.shrink ? 1 : 0,
      flexGrow: column.grow ? 1 : 0,
      minWidth: ellipsis ? 0 : "unset",
    };
    const innerStyle = ellipsis
      ? Object.assign(
          {},
          {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }
        )
      : {};
    const value = getValue(data, column.key);
    let content;
    if (column.formatter) {
      if (column.extraProps) {
        content = (
          <column.formatter value={value} {...column.extraProps} data={data} />
        );
      } else {
        content = <column.formatter value={value} data={data} />;
      }
    } else {
      content = value;
    }
    return (
      <div
        key={column.name}
        className={className}
        role="gridcell"
        style={style}
      >
        <div style={innerStyle} className={`${ROOT}__cell-inner`}>
          {content}
        </div>
      </div>
    );
  };
  const renderCheckbox = () => {
    const isDisabled =
      !selected &&
      !isNil(numSelected) &&
      !isNil(maxSelection) &&
      numSelected >= maxSelection;
    const onClickLabel = (e: any) => {
      e.stopPropagation();
      (e as React.FocusEvent<HTMLInputElement>).target.focus();
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeSelection({
        id: id,
        check: e.target.checked,
      });
    };
    const onKeyPressLabel = (e: React.SyntheticEvent<Element>) => {
      e.stopPropagation();
    };
    return (
      <label onClick={onClickLabel} onKeyPress={onKeyPressLabel}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={selected}
          disabled={isDisabled}
        />
      </label>
    );
  };
  const onClickRowByKey = (e: React.KeyboardEvent<Element>) => {
    if (HANDLE_KEYPRESS_CODE.includes(e.key)) {
      e.preventDefault();
      onClickRow(id, e);
    }
  };
  return (
    <div className={className} role="row">
      <div
        className={`${ROOT}__selection`}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          onClickRow(id, e)
        }
        onKeyPress={onClickRowByKey}
      >
        {isCheckbox && (
          <div
            className={`${ROOT}__cell ${ROOT}__cell--select`}
            role="gridcell"
          >
            {renderCheckbox()}
          </div>
        )}
        {columns.map(renderItem)}
      </div>
    </div>
  );
};

export default Row;
