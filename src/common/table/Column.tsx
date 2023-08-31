export type Props = {
  key: string | Array<string>;
  name: string;
  shrink?: boolean;
  grow?: boolean;
  width?: string | number;
  formatter?: any;
  renderFilter?: () => React.ReactNode;
  selected?: boolean;
  expand?: boolean;
  className?: string;
  isAddon?: boolean;
  addon?: React.ComponentType<Record<string, any>>;
  extraProps?: Record<string, any>;
};

const COLUMN_DEFAULT = {
  selected: false,
  width: "auto",
  expand: true,
  formatter: null,
};

const COLUMN_FOR_ICON = {
  name: "\u2001", // 1em space
  width: "50",
  shrink: true,
  expand: true,
  selected: false,
  isAddon: true,
};
const ROOT = "table-column";
const Column = (columns: Props[]): Props[] => {
  const columnsWithIconColumn: Props[] = [];
  columns.forEach((column) => {
    if (column.addon) {
      columnsWithIconColumn.push({
        ...COLUMN_FOR_ICON,
        key: "",
        formatter: (props: any) => (
          <div className={`${ROOT}__addon addon`}>
            {column.addon ? <column.addon {...props} /> : null}
          </div>
        ),
      });
    }
    columnsWithIconColumn.push({
      ...COLUMN_DEFAULT,
      ...column,
    });
  });
  return columnsWithIconColumn;
};
export default Column;
