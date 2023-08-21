type Props = {
  type: string;
};
const Instruction = ({ type }: Props) => {
  return (
    <>
      {type === "YES_NO_NOTGIVEN" && (
        <div className="instruction">
          <table className="table">
            <tbody>
              <tr className="tr">
                <td className="td">YES</td>
                <td className="td">
                  if the statement agrees with the views of the writer
                </td>
              </tr>
              <tr className="tr">
                <td className="td">NO</td>
                <td className="td">
                  if the statement contradicts the views of the writer
                </td>
              </tr>
              <tr className="tr">
                <td className="td">NOT GIVEN </td>
                <td className="td">
                  if it is impossible to say what the writer thinks about this
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Instruction;
