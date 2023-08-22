import "./table.scss";
export type Instruction = {
  value: string;
  instruction: any;
};
type Props = {
  rows: Instruction[];
};
const Table = ({ rows }: Props) => {
  return (
    <div className="table">
      {rows.map(({ value, instruction }, idx) => (
        <div key={idx} className="table-row">
          <div className="table-colume">{value}</div>
          <div className="table-colume">{instruction}</div>
        </div>
      ))}
    </div>
  );
};
export default Table;
